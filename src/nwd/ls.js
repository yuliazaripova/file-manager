import { readdir } from "node:fs/promises";
import { ERRORS } from "../constants/constants.js";

const list = async () => {
  try {
    const files = await readdir(process.cwd(), { withFileTypes: true });
    const res = [];
    files.forEach((file) => {
      res.push({
        Name: file.name,
        Type: file.isFile() ? "file" : "directory",
      });
    });
    console.table(
      res.sort(function (a, b) {
        return (
          (b.Type < a.Type) - (a.Type < b.Type) ||
          (b.Name < a.Name) - (a.Name < b.Name)
        );
      })
    );
  } catch (err) {
    console.error(ERRORS.operation);
  }
};

export default list;
