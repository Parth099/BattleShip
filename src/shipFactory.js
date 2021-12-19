const Ship = (length) => {
  if (length < 1) {
    throw new Error("invalid Length");
  }
  const health = new Array(length).fill(0);
  const hit = (loc) => {
    health[loc] = 1;
  };
  let isSunk = () => health.reduce((prev, curr) => prev + curr, 0) == length;
  return { isSunk, hit };
};

module.exports = Ship;
