import { homedir } from "os";

const getHomedir = async () => {
  console.log(homedir());
};

export default getHomedir;
