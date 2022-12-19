import { access } from "node:fs/promises";

const checkFileExists = async (file) => {
  try {
    await access(file);
    return true;
  } catch (error) {
    return false;
  }
};

const cd = async (dir) => {
  await checkFileExists();
};
