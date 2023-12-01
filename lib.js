export const secondsToTimeString = (seconds) => {
  if (seconds < 0) return "Don't be silly";
  if (seconds === 1) return "1 second";
  return `${seconds} seconds`;
};
