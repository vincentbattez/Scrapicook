import { FastifyInstrumentation } from "@opentelemetry/instrumentation-fastify";
import { FsInstrumentation } from "@opentelemetry/instrumentation-fs";
import { PinoInstrumentation } from "@opentelemetry/instrumentation-pino";

import { PrismaInstrumentation } from "@prisma/instrumentation";

function createPrismaInstrumentation() {
  return new PrismaInstrumentation({
    // Configure Prisma instrumentation options here if needed
  });
}

function createFastifyInstrumentation() {
  return new FastifyInstrumentation({
    // Configure Fastify instrumentation options here if needed
  });
}

function createPinoInstrumentation() {
  return new PinoInstrumentation({
    // Configure Pino instrumentation options here if needed
  });
}

function createFSInstrumentation() {
  return new FsInstrumentation({
    // Configure FS instrumentation options here if needed
  });
}

const instrumentations = [
  createPrismaInstrumentation(),
  createFastifyInstrumentation(),
  createPinoInstrumentation(),
  createFSInstrumentation(),
];

export function importInstrumentations() {
  return instrumentations;
}
