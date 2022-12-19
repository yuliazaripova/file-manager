import { ERRORS, OS_ARGS_TYPES } from "../constants/constants.js";
import getArchitecture from "./getArchitecture.js";
import getCpus from "./getCpus.js";
import getEOL from "./getEOL.js";
import getHomedir from "./getHomedir.js";
import getUsername from "./getUsername.js";
import { validateOS } from "../helpers/validation.js";

const getOsInfo = (param) => {
  try {
    if (!validateOS(param)) {
      console.error(ERRORS.input);
      return;
    }
    if (param === OS_ARGS_TYPES.eol) {
      getEOL();
    }

    if (param === OS_ARGS_TYPES.cpus) {
      getCpus();
    }

    if (param === OS_ARGS_TYPES.homedir) {
      getHomedir();
    }

    if (param === OS_ARGS_TYPES.username) {
      getUsername();
    }

    if (param === OS_ARGS_TYPES.architecture) {
      getArchitecture();
    }
  } catch (error) {
    console.error(ERRORS.operation);
  }
};

export default getOsInfo;
