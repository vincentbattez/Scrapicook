# =============================================================================
# Scrapicook - Dockerfile
# Multi-stage build using official Playwright image
# https://playwright.dev/docs/docker
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Dependencies
# Install Node.js dependencies
# -----------------------------------------------------------------------------
FROM mcr.microsoft.com/playwright:v1.52.0-noble AS dependencies

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install production dependencies
RUN yarn install --frozen-lockfile --production

# -----------------------------------------------------------------------------
# Stage 2: Builder
# Build TypeScript and generate Prisma client
# -----------------------------------------------------------------------------
FROM mcr.microsoft.com/playwright:v1.52.0-noble AS builder

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies)
RUN yarn install --frozen-lockfile

# Copy prisma schema (required for Prisma generate)
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy source code
COPY . .

# Build TypeScript
RUN yarn build

# -----------------------------------------------------------------------------
# Stage 3: Production
# Final image with Playwright and application
# -----------------------------------------------------------------------------
FROM mcr.microsoft.com/playwright:v1.52.0-noble AS production

WORKDIR /app

# Copy production dependencies from dependencies stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./

# Change ownership to pwuser (non-root user provided by Playwright image)
RUN chown -R pwuser:pwuser /app

# Switch to non-root user
USER pwuser

# Expose application port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Start the application
CMD ["node", "dist/server.js"]
