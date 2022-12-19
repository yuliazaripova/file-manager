import { createReadStream } from "node:fs";
import { ERRORS } from "../constants/constants.js";

const read = async (path) => {
  const stream = createReadStream(path);
  stream.pipe(process.stdout);
  stream.on("error", () => console.log(ERRORS.operation));
};

export default read;
