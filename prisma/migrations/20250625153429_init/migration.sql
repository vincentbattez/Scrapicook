-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "source";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "target";

-- CreateEnum
CREATE TYPE "public"."mapping_method" AS ENUM ('human', 'fussyV1', 'chatGPT');

-- CreateEnum
CREATE TYPE "public"."source_type" AS ENUM ('grocy');

-- CreateEnum
CREATE TYPE "public"."target_type" AS ENUM ('jow', 'grocy');

-- CreateTable
CREATE TABLE "source"."ingredients" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "external_id" VARCHAR NOT NULL,
    "label" VARCHAR NOT NULL,
    "source" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "source"."units" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "external_id" VARCHAR NOT NULL,
    "label" VARCHAR NOT NULL,
    "source" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "target"."ingredients" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "external_id" VARCHAR NOT NULL,
    "label" VARCHAR NOT NULL,
    "target" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "target"."units" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "external_id" VARCHAR NOT NULL,
    "label" VARCHAR NOT NULL,
    "target" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."source_target_ingredients" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "source_id" VARCHAR NOT NULL,
    "target_id" VARCHAR NOT NULL,
    "confidence_score" DECIMAL(3,2) NOT NULL,
    "mapping_method" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "source_target_ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."source_target_units" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "source_id" VARCHAR NOT NULL,
    "target_id" VARCHAR NOT NULL,
    "confidence_score" DECIMAL(3,2) NOT NULL,
    "mapping_method" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "source_target_units_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_external_id_key" ON "source"."ingredients"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "units_external_id_key" ON "source"."units"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_external_id_key" ON "target"."ingredients"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "units_external_id_key" ON "target"."units"("external_id");

-- AddForeignKey
ALTER TABLE "public"."source_target_ingredients" ADD CONSTRAINT "source_target_ingredients_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "source"."ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."source_target_ingredients" ADD CONSTRAINT "source_target_ingredients_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "target"."ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."source_target_units" ADD CONSTRAINT "source_target_units_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "source"."units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."source_target_units" ADD CONSTRAINT "source_target_units_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "target"."units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
