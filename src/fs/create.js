import { writeFile } from "node:fs/promises";
import { ERRORS } from "../constants/constants.js";

const create = async (path) => {
  try {
    await writeFile(path, "", { flag: "wx" });
  } catch (error) {
    console.error(ERRORS.operation);
  }
};

export default create;
