import fastity from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";

const app = fastity();
const HTTP_PORT = 3333;

app.register(createPoll)
app.register(getPoll)

app.listen({ port: HTTP_PORT }).then(() => {
  console.log(`HTTP server running on port ${HTTP_PORT}`);
});
