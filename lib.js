const ONE_MINUTE_AS_SECONDS = 60;
const ONE_HOUR_AS_SECONDS = ONE_MINUTE_AS_SECONDS * 60;
const ONE_DAY_AS_SECONDS = ONE_HOUR_AS_SECONDS * 24;
const ONE_YEAR_AS_SECONDS = ONE_DAY_AS_SECONDS * 365; // Well, approximately!

const BREAKPOINTS = [
  { threshold: ONE_YEAR_AS_SECONDS, designation: "year" },
  { threshold: ONE_DAY_AS_SECONDS, designation: "day" },
  { threshold: ONE_HOUR_AS_SECONDS, designation: "hour" },
  { threshold: ONE_MINUTE_AS_SECONDS, designation: "minute" },
];

const formatCount = (count, designation) => {
  switch (count) {
    case 0:
      return "";
    case 1:
      return `${1} ${designation}`;
    default:
      return `${count} ${designation}s`;
  }
};

const formatBits = (bits) => {
  const nonEmptyBits = bits.filter(Boolean);

  if (nonEmptyBits.length > 2) {
    const allButLastBits = nonEmptyBits.slice(0, -1);
    const allButLastBitsJoined = allButLastBits.join(", ");

    const lastBit = nonEmptyBits.slice(-1)[0];
    return [allButLastBitsJoined, lastBit].join(" and ");
  }

  return nonEmptyBits.join(" and ");
};

export const secondsToTimeString = (seconds) => {
  if (!Number.isInteger(seconds) || seconds < 0)
    throw new Error("Don't be silly");

  const bits = [];

  let remainingSeconds = seconds;

  for (const { threshold, designation } of BREAKPOINTS) {
    if (remainingSeconds >= threshold) {
      const count = Math.floor(remainingSeconds / threshold);
      bits.push(formatCount(count, designation));
      remainingSeconds -= count * threshold;
    }
  }

  bits.push(formatCount(remainingSeconds, "second"));

  return formatBits(bits);
};
