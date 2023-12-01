const formatSeconds = (seconds) => {
  if (seconds === 1) return "1 second";
  return `${seconds} seconds`;
};

const formatMinutes = (minutes) => {
  if (minutes === 1) return "1 minute";
  return `${minutes} minutes`;
};

export const secondsToTimeString = (seconds) => {
  if (seconds < 0) return "Don't be silly";

  if (seconds < 60) return formatSeconds(seconds);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const bits = [];

  bits.push(formatMinutes(minutes));

  if (remainingSeconds > 0) {
    bits.push(formatSeconds(remainingSeconds));
  }

  return bits.join(` and `);
};
