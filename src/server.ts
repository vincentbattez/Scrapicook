/* eslint-disable prettier/prettier */
// import "./metric";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";
import Ajv from "ajv";
import fastify from "fastify";
import { app } from "./app";
import {envToLogger} from "@src/logger";
import dotenv from "dotenv";
import cors from '@fastify/cors'

// Load environment variables from .env file
dotenv.config();

const environment: string = process.env.NODE_ENV ?? "development";

// Instantiate Fastify with logger
const fastifyApp = fastify({
  logger: envToLogger[environment as keyof typeof envToLogger] || true,
}).withTypeProvider<JsonSchemaToTsProvider>();

// const prismaClient: PrismaClient = new PrismaService().database;

// Modify validator config
const ajv = new Ajv({
  coerceTypes: true,
});

(async () => {
  try {
    fastifyApp.setValidatorCompiler(({ schema }) => ajv.compile(schema));

    // Init Swagger
    // await initSwagger(fastifyApp);

    // Register your application as a normal plugin
    await fastifyApp.register(cors, {
      // put your options here
    })
    await fastifyApp.register(app);

    await fastifyApp.listen({
      port: Number(process.env.PORT ?? 8080),
      host: process.env.SERVER_HOSTNAME ?? "localhost",
    });

    fastifyApp.log.info(
      `Server listening on port ${Number(process.env.PORT ?? 8080)}`,
    );
    fastifyApp.log.info(`NODE_ENV = ${process.env.NODE_ENV}`);
    fastifyApp.log.info(`${fastifyApp.printRoutes()}`);
  } catch (error) {
    fastifyApp.log.error("❌ server error:");
    fastifyApp.log.error(error);
    process.exit(1);
  }
})();

export const logger = fastifyApp.log;
