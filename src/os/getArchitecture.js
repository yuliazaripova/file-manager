import { arch } from "os";

const getArchitecture = async () => {
  console.log(arch());
};

export default getArchitecture;
