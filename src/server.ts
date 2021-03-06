/*

This is the entry point for the entire app. It creates a server listening
on our confirgured port. 

Additionally, it pulls together all the middlewre and routing directives 
so the code in the rest of the app is discovered and used.

*/

import dotenv from "dotenv";
import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./services";
import errorHandlers from "./middleware/errorHandlers";
import middleware from "./middleware";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});
process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

// initialize configuration
dotenv.config();
const PORT = process.env.SERVER_PORT;

const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
)