const ONE_MINUTE_AS_SECONDS = 60;
const ONE_HOUR_AS_SECONDS = ONE_MINUTE_AS_SECONDS * 60;

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
  if (!Number.isInteger(seconds) || seconds < 0) return "Don't be silly";

  const bits = [];

  if (seconds < ONE_MINUTE_AS_SECONDS) {
    bits.push(formatCount(seconds, "second"));
  } else {
    if (seconds < ONE_HOUR_AS_SECONDS) {
      const minutes = Math.floor(seconds / ONE_MINUTE_AS_SECONDS);
      const remainingSeconds = seconds % ONE_MINUTE_AS_SECONDS;

      bits.push(formatCount(minutes, "minute"));

      if (remainingSeconds > 0) {
        bits.push(formatCount(remainingSeconds, "second"));
      }
    } else {
      const hours = Math.floor(seconds / ONE_HOUR_AS_SECONDS);
      const minutes = Math.floor(
        (seconds % ONE_HOUR_AS_SECONDS) / ONE_MINUTE_AS_SECONDS
      );
      const remainingSeconds = seconds % ONE_MINUTE_AS_SECONDS;

      bits.push(formatCount(hours, "hour"));
      bits.push(formatCount(minutes, "minute"));
      bits.push(formatCount(remainingSeconds, "second"));
    }
  }

  return formatBits(bits);
};
