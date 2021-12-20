const gameBoard = require("../src/gameboardFactory");
it("Test for proper creation of GB", () => {
    const GB = gameBoard();
    expect(GB.allShipsDown).toBeDefined();
    expect(GB.placeShip).toBeDefined();
    expect(GB.receiveAttack).toBeDefined();
});

//placement

//placement vert
//NOTE: The board is required to be exposed for these tests
it("GB: vert Placement, Ship L = 2", () => {
    const GB = gameBoard();
    const shipLen = 3;
    GB.placeShip(0, 0, shipLen, true);
    let testResult = 1;
    for (let k = 0; k < shipLen; k++) {
        testResult &= GB.board[k][0] != 0;
    }
    expect(testResult).toBeTruthy();
});
it("GB: vert Placement, Ship L = 4", () => {
    const GB = gameBoard();
    const shipLen = 4;
    GB.placeShip(5, 5, shipLen, true);
    expect(GB.board[5][5]).toBeTruthy();
    expect(GB.board[6][5]).toBeTruthy();
    expect(GB.board[7][5]).toBeTruthy();
    expect(GB.board[8][5]).toBeTruthy();
});

it("GB: vert Placement out of Bounds. Should fail to place, Ship L = 5", () => {
    const GB = gameBoard();
    const shipLen = 5;
    expect(GB.placeShip(6, 9, shipLen, true)).toBeFalsy();
});

it("GB: invalid Y, Valid X for Placement", () => {
    const GB = gameBoard();
    const shipLen = 5;
    expect(GB.placeShip(1, 10, shipLen, true)).toBeFalsy();
});

//placement hori
it("Hori Placement at (0, 0) for L = 3", () => {
    const GB = gameBoard();
    const shipLen = 3;
    const placement = GB.placeShip(0, 0, shipLen, false);
    let testResult = 1;
    for (let i = 0; i < shipLen; i++) {
        testResult &= GB.board[0][i] != 0;
    }
    expect(testResult).toBeTruthy();
    expect(placement).toBeTruthy();
});

it("Hori[INVALID] Placement at (5, 6) for L = 6", () => {
    const GB = gameBoard();
    const shipLen = 5;
    const placement = GB.placeShip(5, 6, shipLen, false);
    expect(placement).toBeFalsy();
});

//placement overwrite failure
it("Overwrite test for Ship[VERT] L = 3 at 4, 4", () => {
    const GB = gameBoard();
    const shipLen = 4;
    const placementA = GB.placeShip(4, 4, shipLen, true);
    const placementB = GB.placeShip(4, 4, shipLen, false);

    expect(placementA).toBeTruthy();
    expect(placementB).toBeFalsy();
    //ship tracking
    expect(GB.board[4][4]).toBe(1);
    expect(GB.board[5][4]).toBe(1);
    expect(GB.board[6][4]).toBe(1);
    expect(GB.board[7][4]).toBe(1);

    //2nd ship should never make a mark
    expect(GB.board[4][5]).toBe(0);
    expect(GB.board[4][6]).toBe(0);
    expect(GB.board[4][7]).toBe(0);
});

//valid ships test
it("Double Ship Valid Placement", () => {
    const GB = gameBoard();
    const placementA = GB.placeShip(1, 1, 2, true);
    const placementB = GB.placeShip(0, 0, 3, false);

    expect(placementA).toBeTruthy();
    expect(GB.board[1][1]).toBe(1);
    expect(GB.board[2][1]).toBe(1);

    expect(placementB).toBeTruthy();
    expect(GB.board[0][0]).toBe(2);
    expect(GB.board[0][1]).toBe(2);
    expect(GB.board[0][2]).toBe(2);
});

//receive attack tests
//tests all possible cases {SHIP HIT, SHIP MISS, SAME COORD Calls}
it("ship is vertical at (3, 5)  L = 3", () => {
    const GB = gameBoard();
    const shipLen = 3;
    expect(GB.placeShip(3, 5, shipLen, true)).toBe(true);

    const resultFire = [GB.receiveAttack(4, 5), GB.receiveAttack(5, 5), GB.receiveAttack(3, 5), GB.receiveAttack(1, 5), GB.receiveAttack(1, 5)];
    expect(resultFire).toEqual([true, true, true, true, false]);
    expect(GB.board[3][5]).toBe(-2); //hit
    expect(GB.board[4][5]).toBe(-2);
    expect(GB.board[5][5]).toBe(-2);

    expect(GB.board[1][5]).toBe(-1); //miss

    expect(GB.receiveAttack(3, 5)).toBe(false);
});
