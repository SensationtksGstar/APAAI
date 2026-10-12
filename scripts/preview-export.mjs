import http from "node:http";
import path from "node:path";
import { readFile, stat } from "node:fs/promises";

const root = path.resolve("out");
const port = Number(process.env.PORT ?? 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};
http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      if (pathname === "/") {
        response.writeHead(302, { Location: "/APAAI/pt/" });
        response.end();
        return;
      }
      if (pathname !== "/APAAI" && !pathname.startsWith("/APAAI/"))
        throw new Error("Not found");
      let filename = path.resolve(root, `.${pathname.slice(6) || "/"}`);
      if (filename !== root && !filename.startsWith(root + path.sep))
        throw new Error("Not found");
      if ((await stat(filename)).isDirectory())
        filename = path.join(filename, "index.html");
      const body = await readFile(filename);
      response.writeHead(200, {
        "Content-Type":
          types[path.extname(filename)] ?? "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
      });
      response.end(request.method === "HEAD" ? undefined : body);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Preview: http://127.0.0.1:${port}/APAAI/pt/`),
  );
