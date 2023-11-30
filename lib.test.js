import { secondsToTimeString } from "./lib";

describe("secondsToTimeString tests", () => {
  it("seconds", () => {
    expect(secondsToTimeString(10)).toBe("10 seconds");
  });
});
