import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(".");
const preferredPort = Number(process.env.PORT || 8765);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8"
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const requestPath = normalize(decoded === "/" ? "/index.html" : decoded);
  const filePath = resolve(join(root, requestPath));
  return filePath.startsWith(root) ? filePath : join(root, "index.html");
}

function makeServer() {
  return createServer((request, response) => {
    const filePath = safePath(request.url || "/");
    const pathToServe = existsSync(filePath) && statSync(filePath).isFile() ? filePath : join(root, "index.html");
    response.setHeader("Content-Type", mimeTypes[extname(pathToServe)] || "application/octet-stream");
    createReadStream(pathToServe).pipe(response);
  });
}

function listen(port, attemptsLeft = 25) {
  const server = makeServer();
  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && attemptsLeft > 0) {
      listen(port + 1, attemptsLeft - 1);
      return;
    }
    throw error;
  });
  server.listen(port, () => {
    console.log(`Alberta Driving Study Hub running at http://127.0.0.1:${port}`);
  });
}

listen(preferredPort);
