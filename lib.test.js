import { secondsToTimeString } from "./lib";

describe("secondsToTimeString tests", () => {
  it("10 seconds", () => {
    expect(secondsToTimeString(10)).toBe("10 seconds");
  });

  it.each([
    { seconds: 10, string: "10 seconds" },
    { seconds: 20, string: "20 seconds" },
  ])("$seconds => $string", ({ seconds, string }) => {
    expect(secondsToTimeString(seconds)).toBe(string);
  });
});
