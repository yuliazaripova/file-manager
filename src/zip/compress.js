import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGzip } from "node:zlib";
import { ERRORS } from "../constants/constants.js";

const compress = async (src, des) => {
  const gzip = createGzip();
  const source = createReadStream(src);
  const destination = createWriteStream(des);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error(ERRORS.operation);
    }
  });
};

export default compress;
