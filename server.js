import express from "express";
import endpoints from "express-list-endpoints";
import authorsRouter from "./authors/index.js";

const server = express();

server.use(express.json());

server.use("/authors", authorsRouter);

server.listen(3001, () => {
  console.table(endpoints(server));
});
