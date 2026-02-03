// import {MiniExpress} from "./miniexpress"
// import http from "http";

// const app = new MiniExpress();

// app.use((req, res, next) => {
//   console.log("Middleware hit");
//   next();
// });

// app.get("/hello", (req, res) => {
//   res.end("Hello from mini express");
// });

// http.createServer((req, res) => app.handleRequest(req, res)).listen(8000);


import express , {type Request,type Response} from "express";

const app = express();

app.get("/",(req:Request,res:Response)=>{
  res.send("Hello from server");
})

app.listen(8000,()=>{console.log("Server started")})