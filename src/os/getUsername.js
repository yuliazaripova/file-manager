import { userInfo } from "os";

const getUsername = async () => {
  console.log(userInfo().username);
};

export default getUsername;
