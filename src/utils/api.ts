import { hc } from "hono/client";
import type { AppType } from "../../../blog-api/src";

export const api = hc<AppType>("http://localhost:8000");
