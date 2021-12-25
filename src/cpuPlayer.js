/* @Params
board: the board object from gameBoardFactory
playerGrid: DOM pointer of gamegrid
GBDomPlayer: to send attacks over without having to spend time binding function args
*/
const cpuPlayer = (boardObj, playerGrid, GBDomPlayer) => {
    //gens random from [0 ... max - 1]
    const attackCallStack = []; //we can use an array-based stack
    const BOARD_SIZE = 10;

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const getRandomIntPair = (max) => {
        return [getRandomInt(max), getRandomInt(max)];
    };

    const autoPlaceShips = (shipData) => {
        //gets random in [0 ... max]
        for (ship of shipData) {
            let shipPlaced = false;
            while (!shipPlaced) {
                let [x, y] = getRandomIntPair(BOARD_SIZE);
                let isVert = getRandomInt(2); //[0, 1]

                //params: x, y, shipLength, isVert
                shipPlaced = boardObj.placeShip(x, y, ship.shipLength, isVert);
            }
        }
    };

    const sendAttack = () => {
        let attackSent = false;
        var x, y;
        while (!attackSent) {
            if (attackCallStack.length) {
                var { x, y } = attackCallStack.pop();
                attackSent = updateDOM(x, y);
            } else {
                var [x, y] = getRandomIntPair(BOARD_SIZE);
                attackSent = updateDOM(x, y);
            }
            if (attackSent > 0) {
                //attack was a hit now look around it
                let [x0, y0] = [x, y];
                attackCallStack.push({ x: x0 + 1, y: y0 });
                attackCallStack.push({ x: x0, y: y0 + 1 });
                attackCallStack.push({ x: x0 - 1, y: y0 });
                attackCallStack.push({ x: x0, y: y0 - 1 });
            }
            attackSent = attackSent >= 0;
        }
    };

    const updateDOM = (x, y) => {
        const boardCell = playerGrid.querySelector(`[data-x='${x}'][data-y='${y}']`);
        return GBDomPlayer.receiveAttack(x, y, boardCell);
    };

    return { autoPlaceShips, sendAttack };
};

module.exports = cpuPlayer;
