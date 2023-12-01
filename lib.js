const formatSeconds = (seconds) => {
  if (seconds === 1) return "1 second";
  return `${seconds} seconds`;
};

const formatMinutes = (minutes) => {
  if (minutes === 1) return "1 minute";
  return `${minutes} minutes`;
};

const formatHours = (hours) => {
  if (hours === 1) return "1 hour";
  return `${hours} hours`;
};

const formatBits = (bits) => {
  if (bits.length > 2) {
    const firstBits = bits.slice(0, -1);
    const lastBit = bits.slice(-1)[0];
    const firstBitsJoined = firstBits.join(", ");
    return [firstBitsJoined, lastBit].join(" and ");
  }

  return bits.join(" and ");
};

export const secondsToTimeString = (seconds) => {
  if (!Number.isInteger(seconds) || seconds < 0) return "Don't be silly";

  if (seconds === 0) return "";

  if (seconds < 60) return formatSeconds(seconds);

  const bits = [];

  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    bits.push(formatMinutes(minutes));

    if (remainingSeconds > 0) {
      bits.push(formatSeconds(remainingSeconds));
    }
  } else {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    bits.push(formatHours(hours));
    bits.push(formatMinutes(minutes));
    bits.push(formatSeconds(remainingSeconds));
  }

  return formatBits(bits);
};
