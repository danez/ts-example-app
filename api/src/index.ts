import { join } from "path";
import type { FastifyPluginAsync } from "fastify";
import AutoLoad from "fastify-autoload";

const mainPlugin: FastifyPluginAsync = async function mainPlugin(
  fastify,
  opts
) {
  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: join(__dirname, "fastify/services"),
    options: opts,
  });
};

export function exampleFunction(): string {
     return "hello";
}

export default mainPlugin;
