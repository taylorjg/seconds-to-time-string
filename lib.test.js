import { secondsToTimeString } from "./lib";

const errorResponse = "Don't be silly";

describe("secondsToTimeString tests", () => {
  describe("error scenarios", () => {
    it.each([
      { seconds: null, string: errorResponse },
      { seconds: undefined, string: errorResponse },
      { seconds: "bogus", string: errorResponse },
      { seconds: {}, string: errorResponse },
      { seconds: -1, string: errorResponse },
      { seconds: 1.5, string: errorResponse },
      { seconds: 0, string: "" },
    ])("$seconds => $string", ({ seconds, string }) => {
      expect(secondsToTimeString(seconds)).toBe(string);
    });
  });

  describe("given scenarios", () => {
    it.each([
      { seconds: 1, string: "1 second" },
      { seconds: 2, string: "2 seconds" },
      { seconds: 60, string: "1 minute" },
      { seconds: 120, string: "2 minutes" },
      { seconds: 121, string: "2 minutes and 1 second" },
      { seconds: 3661, string: "1 hour, 1 minute and 1 second" },
    ])("$seconds => $string", ({ seconds, string }) => {
      expect(secondsToTimeString(seconds)).toBe(string);
    });
  });
});
