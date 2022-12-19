import { homedir } from "os";
import { resolve } from "path";
import process from "node:process";
import { Transform, pipeline } from "node:stream";
import { getUsername } from "./src/helpers/args.js";
import {
  printHomeDir,
  printHello,
  printGoodbye,
} from "./src/services/log.service.js";
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
  try {
    const [command, param] = parseChunk(chunk);
    if (command === ".exit") {
      process.exit();
    }
    if (!isValid(command, param)) {
      console.error(ERRORS.input);
      return;
    }

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

    printHomeDir();
  } catch (err) {
    console.error(err);
  }
};

const transform = async () => {
  const _transform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, getCLI(chunk.toString().trim()));
    },
  });
  pipeline(process.stdin, _transform, process.stdout, (err) => {
    err && console.error("err");
  });
};

let username;
const initCLI = async () => {
  try {
    username = getUsername();
    process.chdir(homedir());
    printHello(username);
    printHomeDir();
    await transform();
  } catch (error) {
    console.error(ERRORS.operation);
  }
};

await initCLI();

process.on("SIGINT", process.exit);
process.on("exit", () => {
  printGoodbye(username);
});
