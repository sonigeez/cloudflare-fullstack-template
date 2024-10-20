import { Hono } from "hono";
import { testRoute } from "./test/test";

export const apiRoute = new Hono();

apiRoute.get("/", (c) => c.text(" world"));

apiRoute.route("/test", testRoute);
