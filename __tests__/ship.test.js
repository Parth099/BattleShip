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
    const length = 3;
    const Ship = shipFactory(length);
    for (let k = 0; k < length; k++) {
        Ship.hit();
    }
    expect(Ship.isSunk()).toBeTruthy();
});

it("Ship Factory sinks ship Length = 4, from 2 diff hits", () => {
    const length = 4;
    const Ship = shipFactory(length);
    Ship.hit();
    Ship.hit();
    expect(Ship.isSunk()).toBeFalsy();
});

it("Ship Factory sinks ship Length = 1", () => {
    const Ship = shipFactory(1);
    Ship.hit();
    expect(Ship.isSunk()).toBeTruthy();
});

it("tests failure to hit after sunk", () => {
    const length = 3;
    const Ship = shipFactory(length);
    for (let k = 0; k < length; k++) {
        Ship.hit();
    }
    expect(Ship.isSunk()).toBeTruthy();
    expect(Ship.hit()).toBeFalsy();
});
