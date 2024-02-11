import fastity from "fastify";

const app = fastity();
const HTTP_PORT = 3333;

app.get('/', () => "Olá mundo!")

app.listen({ port: HTTP_PORT }).then(() => {
  console.log(`HTTP server running on port ${HTTP_PORT}`);
});
