import { Hono } from "hono";

const app = new Hono();

app.get("/api", (c) => {
  return c.json({ hello: "world world world world world" });
});

// HTTP Methods
app.get("/", (c) => c.text("GET /"));
app.post("/", (c) => c.text("POST /"));
app.put("/", (c) => c.text("PUT /"));
app.delete("/", (c) => c.text("DELETE /"));

// Wildcard
app.get("/wild/*/card", (c) => {
  return c.text("GET /wild/*/card");
});

// Any HTTP methods
app.all("/hello", (c) => c.text("Any Method /hello"));

// Custom HTTP method
app.on("PURGE", "/cache", (c) => c.text("PURGE Method /cache"));

// Multiple Method
app.on(["PUT", "DELETE"], "/post", (c) => c.text("PUT or DELETE /post"));

export default app;
