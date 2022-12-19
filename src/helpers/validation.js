import { COMMANDS, ARGS_NUMBER } from "../constants/constants.js";

const validateCommand = (command) => Object.values(COMMANDS).includes(command);

const validateArgsNumber = (command, params) =>
  params.length >= ARGS_NUMBER[command];

export const isValid = (command, params) =>
  validateCommand(command) && validateArgsNumber(command, params);

export const parseChunk = (str) => {
  const [command, ...param] = str.split(" ");
  return [command, param];
};
