/* @Params
board: the board object from gameBoardFactory
*/
const cpuPlayer = (boardObj) => {
    const autoPlaceShips = (shipData) => {
        //gets random in [0 ... max]
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        const BOARD_SIZE = 10;
        for (ship of shipData) {
            let shipPlaced = false;
            while (!shipPlaced) {
                let x = getRandomInt(BOARD_SIZE);
                let y = getRandomInt(BOARD_SIZE);
                let isVert = getRandomInt(2); //[0, 1]

                //params: x, y, shipLength, isVert
                shipPlaced = boardObj.placeShip(x, y, ship.shipLength, isVert);
            }
        }
    };
    return { autoPlaceShips };
};

module.exports = cpuPlayer;
