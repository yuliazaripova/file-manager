import { rename as renameFs, access } from "node:fs/promises";
import { ERRORS } from "../constants/constants.js";

const checkFileExists = async (file) => {
  try {
    await access(file);
    return true;
  } catch (error) {
    return false;
  }
};

const rename = async (oldPath, newPath) => {
  try {
    const isExist = await checkFileExists(newPath);
    if (isExist) {
      console.error("File already exists");
    }
    await renameFs(oldPath, newPath);
  } catch (err) {
    console.error(ERRORS.operation);
  }
};

export default rename;
