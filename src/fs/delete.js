import { rm } from "node:fs/promises";
import { ERRORS } from "../constants/constants.js";

const remove = async (path) => {
  try {
    await rm(path);
  } catch (err) {
    console.error(ERRORS.operation);
  }
};

export default remove;
