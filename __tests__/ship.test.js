const shipFactory = require("../src/shipFactory");

//creation
it("Ship Factory produces Correct output for New Ship", () => {
  const Ship = shipFactory(2);
  expect(Ship.isSunk).toBeDefined();
  expect(Ship.hit).toBeDefined();
});

it("Ship Factory produces Correct output for invalid Size", () => {
  expect(() => shipFactory(0)).toThrow();
});

//testing hit
it("Ship Factory sinks ship Length = 3, from 3 diff hits", () => {
  const length = 1;
  const Ship = shipFactory(length);
  for (let k = 0; k < length; k++) {
    Ship.hit(k);
  }
  expect(Ship.isSunk()).toBeTruthy();
});

it("Ship Factory sinks ship Length = 4, from 2 diff hits", () => {
  const length = 4;
  const Ship = shipFactory(length);
  Ship.hit(0);
  Ship.hit(2);
  expect(Ship.isSunk()).toBeFalsy();
});

it("Ship Factory sinks ship Length = 1", () => {
  const Ship = shipFactory(1);
  Ship.hit(0);
  expect(Ship.isSunk()).toBeTruthy();
});
