import { ERRORS } from "../constants/constants.js";
import { resolve } from "path";

const cd = async (param) => {
  try {
    const newPath = resolve(process.cwd(), param);
    process.chdir(newPath);
  } catch (error) {
    console.error(ERRORS.operation);
  }
};

export default cd;
