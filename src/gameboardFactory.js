const shipFactory = require("./shipFactory");

const gameBoard = () => {
    const BOARD_SIZE = 10;
    const board = new Array(BOARD_SIZE); //gen 10x10 board
    for (let i = 0; i < BOARD_SIZE; i++) {
        board[i] = new Array(BOARD_SIZE).fill(0);
    }
    //for ship ID
    let rollingShipID = 1;
    const shipMap = new Map();
    const placeShip = (x, y, shipLength, isVert) => {
        let isPlaced = false;
        //first checks if coords are valid WRT ShipSize
        //then checks if the space reqired isnt taken by other ships.
        if (isVert && x >= 0 && x <= BOARD_SIZE - shipLength && y >= 0 && y < BOARD_SIZE) {
            for (let i = 0; i < shipLength; i++) {
                if (board[x + i][y]) {
                    return false;
                }
            }
            for (let i = 0; i < shipLength; i++) {
                board[x + i][y] = rollingShipID;
            }
            isPlaced = true;
        } else if (x >= 0 && x < BOARD_SIZE && y >= 0 && y <= BOARD_SIZE - shipLength) {
            for (let i = 0; i < shipLength; i++) {
                if (board[x][y + i]) {
                    return false;
                }
            }
            for (let i = 0; i < shipLength; i++) {
                board[x][y + i] = rollingShipID;
            }
            isPlaced = true;
        }
        if (isPlaced) {
            hashShip(shipFactory(shipLength), rollingShipID, shipMap);
            rollingShipID++;
        }
        return isPlaced;
    };

    const isInBounds = (x, y) => {
        let x_Status = x >= 0 && x < BOARD_SIZE;
        let y_Status = y >= 0 && y < BOARD_SIZE;
        return x_Status && y_Status;
    };

    const receiveAttack = (x, y) => {
        //if out of bounds its not valSd
        if (!isInBounds(x, y)) {
            return -1;
        }

        const cellID = board[x][y];
        if (cellID < 0) {
            return -1;
        } else if (cellID == 0) {
            board[x][y] = -1;
            return 0;
        } else {
            const shipHit = shipMap.get(cellID);
            console.log({ shipHit, board }, x, y);
            shipHit.hit();

            if (shipHit.isSunk()) {
                shipMap.delete(cellID);
            }

            board[x][y] = -2;
        }
        //can only return true since it will be a valid guess/move
        return 1;
        //key :
        //  -1: invalid attack
        //   0: miss
        //   1: hit
    };
    const allShipsDown = () => shipMap.size === 0; //no need for O(n * n) search

    const hashShip = (shipToHash, shipID, shipMap) => {
        shipMap.set(shipID, shipToHash);
    };

    return { placeShip, receiveAttack, allShipsDown, board };
};

module.exports = gameBoard;
