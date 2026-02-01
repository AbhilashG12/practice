import {MiniExpress} from "./miniexpress.ts"
import http from "http";

const app = new MiniExpress();

app.use((req, res, next) => {
  console.log("Middleware hit");
  next();
});

app.get("/hello", (req, res) => {
  res.end("Hello from mini express");
});

http.createServer((req, res) => app.handleRequest(req, res)).listen(3000);
