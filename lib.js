export const secondsToTimeString = (seconds) => {
  if (seconds < 0) return "Don't be silly";
  if (seconds === 1) return "1 second";
  if (seconds < 60) return `${seconds} seconds`;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const bits = [];

  bits.push(minutes === 1 ? `1 minute` : `${minutes} minutes`);

  if (remainingSeconds > 0) {
    bits.push(
      remainingSeconds === 1 ? `1 second` : `${remainingSeconds} seconds`
    );
  }

  return bits.join(` and `);
};
