import { homedir } from "os";

export const printHomeDir = () => console.log(`You are currently in ${process.cwd()}`);

export const printHello = (username) => console.log(`Welcome to the File Manager, ${username}!`);

export const printGoodbye = (username) => console.log(`Thank you for using File Manager, ${username}, goodbye!`);
