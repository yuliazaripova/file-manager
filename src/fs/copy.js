import { createReadStream, createWriteStream } from "node:fs";
import { join, basename } from "node:path";

const copy = async (source, des) => {
  const readableStream = createReadStream(source);
  const writableStream = createWriteStream(join(des, basename(source)));
  readableStream.pipe(writableStream);
  readableStream.on("error", () => console.log(ERRORS.operation));
  writableStream.on("error", () => console.log(ERRORS.operation));
};

export default copy;
