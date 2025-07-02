import type { AutoloadPluginOptions } from "@fastify/autoload";
import AutoLoad from "@fastify/autoload";
import type { FastifyPluginAsync } from "fastify";
import { join } from "path";

export const options = {};

export const app: FastifyPluginAsync<AutoloadPluginOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  await fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  // This loads all plugins defined in controller
  // define your routes in one of these
  await fastify.register(AutoLoad, {
    dir: join(__dirname, "controllers"),
    options: {
      ...opts,
    },
  });
};
