import { FastifyInstance } from "fastify";

export async function pollResult(app: FastifyInstance) {
  app.get(
    "/polls/:pollId/results",
    { websocket: true },
    (connection, request) => {
      connection.socket.on("message", (message: string) => {
        // Se inscrever apenas nas mensagens publicadas no canal com o ID da enquete (pollId)
        // connection.socket.send("you sent: " + message);
      });
    }
  );
}
