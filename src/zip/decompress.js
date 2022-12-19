import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createUnzip } from "node:zlib";
import { ERRORS } from "../constants/constants.js";

const decompress = async (src, des) => {
  const unzip = createUnzip();
  const source = createReadStream(src);
  const destination = createWriteStream(des);

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error(ERRORS.operation);
    }
  });
};

export default decompress;
