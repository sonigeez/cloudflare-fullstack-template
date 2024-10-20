import { Hono } from "hono";
import { testRoute } from "./test/test";

export const apiRoute = new Hono({
	strict: false,
});

apiRoute.get("/", (c) => c.json({ message: "Hello world", initial_count: 10 }));

apiRoute.route("/test", testRoute);
