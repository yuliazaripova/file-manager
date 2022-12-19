import { cpus } from "os";

const getCpus = async () => {
  const res = cpus().map((i) => {
    return { model: i.model, speed: i.speed / 1000 };
  });
  console.log(res);
};

export default getCpus;
