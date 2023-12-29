import { Hono } from "hono";

const books = new Hono();

books.get("/", (c) => c.text("Hono!"));

export default books;
