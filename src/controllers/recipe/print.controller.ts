import { logger } from "@src/server";
import type { FastifyPluginAsync } from "fastify";
import { promises as fs } from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";
import { Page, chromium } from "playwright";

import { IPrintRecipe200Response } from "@controllers/recipe/interfaces/print/printRecipe200Response.interface";
import { IPrintRecipeBody } from "@controllers/recipe/interfaces/print/printRecipeBody.interface";
import { printRecipeBodySchema } from "@controllers/recipe/schemas/print/printRecipeBody.schema";

const todayRecipeFolderName = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

/**
 * Removes cookie banner from the page if it exists
 */
async function _removeCookieBanner(page: Page): Promise<void> {
  try {
    const cookieBanner = page.locator("#kiecoosentconroot");

    // Use waitFor with timeout to check if banner exists without waiting indefinitely
    try {
      await cookieBanner.waitFor({ state: "visible", timeout: 500 });

      // Banner exists and is visible - proceed with removal
      const bannerCount = await cookieBanner.count();

      if (bannerCount > 0) {
        // Try to click accept/close button if it exists
        const acceptButton = cookieBanner.locator(
          'button, [role="button"], .accept, .close, [aria-label*="accept"], [aria-label*="close"]',
        );
        const buttonCount = await acceptButton.count();

        if (buttonCount > 0) {
          await acceptButton.first().click();
          logger.info("✅ Cookie banner dismissed");
        } else {
          // If no button found, remove the banner element entirely
          await cookieBanner.evaluate((el: any) => el.remove());
          logger.info("✅ Cookie banner removed");
        }
      }
    } catch (waitError: any) {
      // Banner doesn't exist or isn't visible (already accepted or never shown)
      logger.info("ℹ️ No cookie banner found (already accepted or not shown)");

      return;
    }
  } catch (error: any) {
    // General error handling for other issues
    logger.info("⚠️ Could not handle cookie banner:", error.message);
  }
}

async function _getRecipeTitle(page: Page): Promise<string> {
  const titleElement = await page.locator("h1").first().innerText();

  return titleElement || "recipe";
}

/**
 * Generates and saves PDF from article element
 */
async function _generateAndSaveArticlePdf(
  page: any,
  articleIndex: number,
): Promise<string> {
  const recipePage = page.locator("article");

  // Wait for article to be available
  await page.waitForSelector("article");

  // Get the bounding box of the article element
  const articleBox = await recipePage.boundingBox();

  if (!articleBox) {
    throw new Error("Article element not found or not visible");
  }

  // Add some padding around the article element
  const padding = 20;
  const clip = {
    x: Math.max(0, articleBox.x - padding),
    y: Math.max(0, articleBox.y - padding),
    width: articleBox.width + padding * 2,
    height: articleBox.height + padding * 2,
  };

  const recipeTitle = await _getRecipeTitle(page);
  const slugifiedTitle = recipeTitle
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^-+|-+$/g, "");

  const pdfPath = `public/print/${todayRecipeFolderName}/recipe-${articleIndex + 1}-${slugifiedTitle}.pdf`;

  // print PDF - only the article element area
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
    clip: clip,
  });

  logger.info(`✅ Recipe ${articleIndex + 1} article saved to: ${pdfPath}`);

  return pdfPath;
}

/**
 * Merges all PDF files in the print directory into a single weekly recipe PDF
 */
async function _mergeWeeklyRecipes(): Promise<string> {
  try {
    const printDir = path.join(
      process.cwd(),
      "public",
      "print",
      todayRecipeFolderName,
    );

    // Check if print directory exists
    try {
      await fs.access(printDir);
    } catch {
      logger.info("Print directory does not exist, creating it...");
      await fs.mkdir(printDir, { recursive: true });

      return "";
    }

    // Read all PDF files from the directory
    const fileList = await fs.readdir(printDir);
    const pdfFileList = fileList.filter((file) => file.endsWith(".pdf"));

    if (!pdfFileList.length) {
      logger.info("No PDF files found to merge");

      return "";
    }

    // Create merged PDF document
    const mergedPdf = await PDFDocument.create();

    // Sort files to ensure consistent order
    pdfFileList.sort();

    // Merge each PDF file
    for (const pdfFile of pdfFileList) {
      const pdfPath = path.join(printDir, pdfFile);
      const pdfBytes = await fs.readFile(pdfPath);
      const pdf = await PDFDocument.load(pdfBytes);

      // Copy all pages from the source PDF
      const copiedPageList = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices(),
      );
      copiedPageList.forEach((page) => mergedPdf.addPage(page));

      logger.info(`✅ Merged ${pdfFile}`);
    }

    // Generate filename with current date
    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const mergedPdfPath = path.join(printDir, `week_recipe-${currentDate}.pdf`);

    // Save the merged PDF
    const mergedPdfBytes = await mergedPdf.save();
    await fs.writeFile(mergedPdfPath, mergedPdfBytes);

    logger.info(`✅ Weekly recipe PDF created: ${mergedPdfPath}`);

    return mergedPdfPath;
  } catch (error: any) {
    logger.error("Error merging weekly recipes:", error.message);
    throw new Error(`Failed to merge weekly recipes: ${error.message}`);
  }
}

const printRecipeController: FastifyPluginAsync = async (
  fastify,
): Promise<void> => {
  // Main endpoint for printing individual recipes
  fastify.post<{
    Reply: IPrintRecipe200Response;
    Body: IPrintRecipeBody;
  }>(
    "/print",
    {
      schema: {
        body: printRecipeBodySchema,
        response: {
          200: {
            description: "Recipe successfully printed to target platform",
          },
          400: {
            description: "Invalid request parameters",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    statusCode: { type: "number" },
                  },
                  required: ["message", "statusCode"],
                },
              },
            },
          },
          500: {
            description: "Internal server error during printing",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    statusCode: { type: "number" },
                  },
                  required: ["message", "statusCode"],
                },
              },
            },
          },
        },
      },
    },
    async (request, reply) => {
      try {
        const { recipeUrlList } = request.body;

        logger.info("Printing recipes from URLs:", recipeUrlList);

        const browser = await chromium.launch({ headless: true });
        const context = await browser.newContext();

        for (const [index, url] of recipeUrlList.entries()) {
          const page = await context.newPage();
          logger.info(`Processing ${index + 1}/${recipeUrlList.length}`);

          await page.goto(url, { waitUntil: "domcontentloaded" });

          // Remove cookie banner and generate PDF in separate functions
          await _removeCookieBanner(page);
          await _generateAndSaveArticlePdf(page, index);

          await page.close();
        }

        await browser.close();
        logger.info("✅ All recipes printed!");

        // Merge all individual PDFs into a weekly recipe PDF
        let weeklyPdfPath;

        try {
          weeklyPdfPath = await _mergeWeeklyRecipes();
        } catch (error) {
          logger.warn("⚠️ Failed to create weekly PDF:", error);
        }

        // If weekly PDF was created, serve it directly for download
        if (weeklyPdfPath) {
          try {
            const pdfBuffer = await fs.readFile(weeklyPdfPath);
            const fileName = path.basename(weeklyPdfPath);

            // Set headers for PDF download
            reply.header("Content-Type", "application/pdf");

            reply.header(
              "Content-Disposition",
              `attachment; filename="${fileName}"`,
            );
            reply.header("Content-Length", pdfBuffer.length.toString());

            logger.info(`✅ Serving weekly PDF directly: ${fileName}`);

            return reply.send(pdfBuffer);
          } catch (error) {
            logger.warn(
              "⚠️ Failed to serve PDF directly, returning JSON response:",
              error,
            );
          }
        }

        const response: IPrintRecipe200Response = {
          message: "Recipes successfully printed",
          statusCode: 200,
          recipeList: [
            {
              recipeName: "Weekly Recipe Collection",
              downloadLink: weeklyPdfPath,
            },
          ],
        };

        return await reply.code(200).send(response);
      } catch (error: any) {
        const statusCode = error.statusCode || 500;

        return reply.code(statusCode).send({
          message: error.message || "Internal server error during printing",
          statusCode,
        });
      }
    },
  );
};

export default printRecipeController;
