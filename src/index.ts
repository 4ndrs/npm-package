import yargs from "yargs/yargs";

export const main = () => {
  const args = yargs(process.argv.slice(2))
    .options({ name: { type: "string", default: "World" } })
    .parseSync();

  const { name } = args;

  console.info(`Hello, ${name}!`);
};
