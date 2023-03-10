import yargs from "yargs/yargs";

export const main = async () => {
  const args = await parseArgs();
  console.info(`Hello, ${args.name}!`);
};

const parseArgs = async () => {
  const parser = yargs(process.argv.slice(2))
    .options({
      name: {
        alias: "n",
        type: "string",
        default: "World",
        describe: "Name to greet",
        requiresArg: true,
      },
    })
    .usage("Usage: $0 -n [name]")
    .alias("help", "h")
    .alias("version", "v");

  const { name } = await parser.argv;

  return {
    name,
  };
};
