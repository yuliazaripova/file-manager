import { ERRORS } from "../constants/constants.js";

const up = async () => {
  try {
    process.chdir("../");
  } catch (error) {
    console.error(ERRORS.operation);
  }
};

export default up;
