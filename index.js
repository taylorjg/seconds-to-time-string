import { secondsToTimeString } from "./lib.js";

const main = () => {
  const seconds = 123;
  const string = secondsToTimeString(seconds);
  console.log(`${seconds} => ${string}`);
};

main();
