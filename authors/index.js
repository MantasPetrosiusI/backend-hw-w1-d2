import express from "express";
import uniqid from "uniqid";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const authorsFilePath = join(
  dirname(fileURLToPath(import.meta.url)),
  "authors.json"
);

const authorsRouter = express.Router();

authorsRouter.get("/", async (req, res) => {
  try {
    const fileAsBuffer = fs.readFileSync(authorsFilePath);
    const fileAsString = fileAsBuffer.toString();
    const fileAsJSON = JSON.parse(fileAsString);
    res.send(fileAsJSON);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

authorsRouter.get("/:authorId", async (req, res) => {
  try {
    const fileAsBuffer = fs.readFileSync(authorsFilePath);
    const fileAsString = fileAsBuffer.toString();
    const fileAsJSON = JSON.parse(fileAsString);
    res.send(fileAsJSON);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default authorsRouter;
