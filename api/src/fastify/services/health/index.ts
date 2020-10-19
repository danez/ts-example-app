import type { FastifyPluginAsync } from "fastify";

const healthService: FastifyPluginAsync = async function healthService(fastify) {
  fastify.get("/", function (_request, reply) {
    reply.code(200).send({ statusCode: 200, status: "ok" });
  });
};

export default healthService;
