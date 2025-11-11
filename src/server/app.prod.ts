import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { setupRoutes } from "./routes";

const app = new Hono();

// Paths that should be served as-is (static files and API routes)
const preservePaths = ["/static", "/favicon.svg", "/api"];

// Serve static files with SPA fallback for client-side routing
app.use(
  "*",
  serveStatic({
    root: `web`,
    rewriteRequestPath(path) {
      // If it's a static file or API route, serve it directly
      if (preservePaths.some((p) => path.startsWith(p))) {
        return path;
      }
      // Otherwise, return root path which serves index.html (SPA fallback)
      return "/";
    },
  }),
);

setupRoutes(app);

Deno.serve(app.fetch);
