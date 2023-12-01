import { secondsToTimeString } from "./lib";

const errorResponse = "Don't be silly";

describe("secondsToTimeString tests", () => {
  describe("error scenarios", () => {
    it.each([
      { seconds: null, string: errorResponse },
      { seconds: undefined, string: errorResponse },
      { seconds: "bogus", string: errorResponse },
      { seconds: true, string: errorResponse },
      { seconds: new Date(), string: errorResponse },
      { seconds: {}, string: errorResponse },
      { seconds: -1, string: errorResponse },
      { seconds: 1.5, string: errorResponse },
    ])("$seconds => $string", ({ seconds, string }) => {
      expect(secondsToTimeString(seconds)).toBe(string);
    });
  });

  describe("unknown scenario", () => {
    it("0 seconds should return empty string ?", () => {
      expect(secondsToTimeString(0)).toBe("");
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
      {
        seconds: 31626061,
        string: "1 year, 1 day, 1 hour, 1 minute and 1 second",
      },
      {
        seconds: 127702942,
        string: "4 years, 18 days, 1 hour, 2 minutes and 22 seconds",
      },
    ])("$seconds => $string", ({ seconds, string }) => {
      expect(secondsToTimeString(seconds)).toBe(string);
    });
  });
});
