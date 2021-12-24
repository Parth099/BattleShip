/* @Params
board: the board object from gameBoardFactory
playerGrid: DOM pointer of gamegrid
GBDomPlayer: to send attacks over without having to spend time binding function args
*/
const cpuPlayer = (boardObj, playerGrid, GBDomPlayer) => {
    //gens random from [0 ... max - 1]

    const BOARD_SIZE = 10;
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const autoPlaceShips = (shipData) => {
        //gets random in [0 ... max]
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

    const sendAttack = () => {
        let attackSent = false;
        let x, y;
        while (!attackSent) {
            x = getRandomInt(BOARD_SIZE);
            y = getRandomInt(BOARD_SIZE);
            attackSent = updateDOM(x, y);
        }
        console.log("sent: ", x, y);
    };

    const updateDOM = (x, y) => {
        const boardCell = playerGrid.querySelector(`[data-x='${x}'][data-y='${y}']`);
        return GBDomPlayer.receiveAttack(x, y, boardCell);
    };

    return { autoPlaceShips, sendAttack };
};

module.exports = cpuPlayer;
