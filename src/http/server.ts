import fastity from "fastify";
import cookie from "@fastify/cookie"
import websocket from "@fastify/websocket";

import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import { pollResult } from "./ws/poll-results";


const app = fastity();
const HTTP_PORT = 3333;

app.register(websocket)

app.register(cookie, {
  secret: "chave-secreta-polls-app",
  hook: "onRequest",
})

app.register(pollResult)
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: HTTP_PORT }).then(() => {
  console.log(`HTTP server running on port ${HTTP_PORT}`);
});
