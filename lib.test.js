import { secondsToTimeString } from "./lib";

describe("secondsToTimeString tests", () => {
  it.each([
    { seconds: -1, string: "Don't be silly" },
    { seconds: 0, string: "0 seconds" },
    { seconds: 1, string: "1 second" },
    { seconds: 10, string: "10 seconds" },
    { seconds: 20, string: "20 seconds" },
  ])("$seconds => $string", ({ seconds, string }) => {
    expect(secondsToTimeString(seconds)).toBe(string);
  });
});
