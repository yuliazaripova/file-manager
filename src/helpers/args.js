export const getUsername = () => {
  return process.argv[2].split("--username=")[1];
};
