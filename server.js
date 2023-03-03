import express from "express";
import cors from "cors";
import endpoints from "express-list-endpoints";
import authorsRouter from "./authors/index.js";

const server = express();

server.use(cors());

server.use(express.json());

server.use("/authors", authorsRouter);

server.listen(3025, () => {
  console.table(endpoints(server));
});
