import Bun from "bun";
import app from "./server/server";

Bun.serve({
  development: true,
  port: 8080,
  fetch: app.fetch,
});
