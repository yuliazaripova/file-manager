import { readFile } from "node:fs/promises";
import { ERRORS } from "../constants/constants.js";
const { createHash } = await import("node:crypto");

const getHash = async (path) => {
  try {
    const content = await readFile(path, { encoding: "utf8" });
    const hash = createHash("sha256").update(content).digest("hex");
    console.log(hash);
  } catch (error) {
    console.error(ERRORS.operation);
  }
};

export default getHash;
