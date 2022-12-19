import up from "./src/nwd/up.js";
import list from "./src/nwd/ls.js";
import read from "./src/fs/read.js";
import { ERRORS, COMMANDS } from "./src/constants/constants.js";
import create from "./src/fs/create.js";
import rename from "./src/fs/rename.js";
import copy from "./src/fs/copy.js";
import move from "./src/fs/move.js";
import remove from "./src/fs/delete.js";
import getOsInfo from "./src/os/index.js";
import getHash from "./src/hash/getHash.js";
import compress from "./src/zip/compress.js";
import decompress from "./src/zip/decompress.js";
import { isValid, parseChunk } from "./src/helpers/validation.js";



const getCLI = (chunk) => {
  const [command, param] = parseChunk(chunk);
  if (!isValid()) {
  //  console.error(ERRORS.input);
    return;
  }
  console.log(isValid());

  if (command == COMMANDS.up) {
    up();
  }
  if (command == COMMANDS.cd) {
    const newPath = resolve(process.cwd(), ...param);
    process.chdir(newPath);
  }
  if (command === COMMANDS.ls) {
    list();
  }

  if (command === COMMANDS.cat) {
    read(...param);
  }

  if (command === COMMANDS.add) {
    create(...param);
  }

  if (command === COMMANDS.rn) {
    rename(...param);
  }

  if (command === COMMANDS.cp) {
    copy(...param);
  }

  if (command === COMMANDS.mv) {
    move(...param);
  }

  if (command === COMMANDS.rm) {
    remove(...param);
  }

  if (command === COMMANDS.os) {
    getOsInfo(...param);
  }

  if (command === COMMANDS.hash) {
    getHash(...param);
  }

  if (command === COMMANDS.compress) {
    compress(...param);
  }

  if (command === COMMANDS.decompress) {
    decompress(...param);
  }

  //   console.log(command == COMMANDS.cd, command.length, COMMANDS.cd.length, COMMANDS)
  printHomeDir();
};


const transform = async () => {
  const _transform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, getCLI(chunk.toString().trim()));
    },
  });
  pipeline(process.stdin, _transform, process.stdout, (err) => {
    err && console.error(err);
  });
};



const initCLI = async () => {
  try {
   const username = getUsername();
  // process.chdir(homedir());
   printHello(username);
   printHomeDir();
  await transform();
  } catch (error) {
  //  console.log(error);
    //   console.error(ERRORS.operation);
  }

  //  const args = getArgs(process.args);
  /*   console.log(homedir());
  console.log(basename(filePath)); */
};

await initCLI();