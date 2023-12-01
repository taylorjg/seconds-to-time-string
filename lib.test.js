import { secondsToTimeString } from "./lib";

describe("secondsToTimeString tests", () => {
  it.each([
    { seconds: -1, string: "Don't be silly" },
    { seconds: 0, string: "0 seconds" },
    { seconds: 1, string: "1 second" },
    { seconds: 2, string: "2 seconds" },
    { seconds: 60, string: "1 minute" },
    { seconds: 120, string: "2 minutes" },
    { seconds: 121, string: "2 minutes and 1 second" },
  ])("$seconds => $string", ({ seconds, string }) => {
    expect(secondsToTimeString(seconds)).toBe(string);
  });
});
