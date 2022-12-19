import copy from "./copy.js";
import remove from "./delete.js";
import { ERRORS } from "../constants/constants.js";

const move = async (source, des) => {
  try {
    await copy(source, des);
    await remove(source);
  } catch (err) {
    console.error(ERRORS.operation);
  }
};

export default move;
