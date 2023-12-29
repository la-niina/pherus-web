import { Hono } from "hono";
import books from "./api/route";

const app = new Hono();
console.log("hello world");

app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.route("/route", books)

Bun.serve({
  port: 3080,
  fetch: app.fetch,
});
