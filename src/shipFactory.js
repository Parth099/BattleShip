const Ship = (length) => {
  if (length < 1) {
    throw new Error("invalid Length");
  }
  let health = length;
  const hit = () => {
    if (health > 0) {
      health -= 1;
      return true;
    }
    return false;
  };
  let isSunk = () => health <= 0;
  return { isSunk, hit, length };
};

module.exports = Ship;
