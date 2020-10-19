import type { FastifyPluginAsync } from "fastify";

const rootService: FastifyPluginAsync<{
  prefix?: string;
}> = async function rootService(fastify) {
  fastify.get("/", async function (_req, reply) {
    reply.redirect("/health");
  });
};

export default rootService;
