//css imports
import "./StyleAssets/reset.css";
import "./StyleAssets/style.css";
//functional imports
import gameBoardDom from "./gameBoardDom";
import gameBoard from "./gameboardFactory";
import DragDropShip from "./DragDropShips";
import cpuPlayer from "./cpuPlayer";

//ship data: customizable
const shipsInfo = [
    {
        shipName: "destroyer",
        shipLength: 2,
        colorClass: "c1",
    },
    {
        shipName: "submarine",
        shipLength: 3,
        colorClass: "c2",
    },
    {
        shipName: "cruiser",
        shipLength: 3,
        colorClass: "c3",
    },
    {
        shipName: "battleship",
        shipLength: 4,
        colorClass: "c4",
    },
    {
        shipName: "carrier",
        shipLength: 5,
        colorClass: "c5",
    },
];

//init player side first so we can place ships via DRAGDROP
const gameBoardPlayer = gameBoard();
const GBPlayerDOM = new gameBoardDom("#gamegrid", gameBoardPlayer, shipsInfo);
GBPlayerDOM.init();

//dragDrop
//callback called when ship placeing is done
const dragDropCallback = () => {
    const dragDropPane = document.querySelector(".intro-instructions-cont");
    const enemyBoardCont = document.querySelector(".intro-placement-grid-cont.right");
    dragDropPane.classList.add("void");
    enemyBoardCont.classList.remove("void");

    initAiOpponentDom();
};

const boardNodes = document.querySelectorAll(".gamegrid-cell");
//dragdrop class needs access to the playerGrid and class to place ships
const dragDropController = new DragDropShip(".DragDrop-main-cont", shipsInfo, boardNodes, GBPlayerDOM, dragDropCallback);
dragDropController.init();

//ship placement is now done
//hide the placement pane and start creating the other enemy side
function initAiOpponentDom() {
    const enemyBoard = gameBoard();
    const GBEnemyDOM = new gameBoardDom("#gamegrid-enemy", enemyBoard, shipsInfo);

    const boardNode = document.querySelector("#gamegrid");
    const enemyController = cpuPlayer(enemyBoard, boardNode, GBPlayerDOM);

    enemyController.autoPlaceShips(shipsInfo);

    GBEnemyDOM.init();
    GBEnemyDOM.attachAttackListener("#gamegrid-enemy");
    startGame(GBPlayerDOM, GBEnemyDOM, enemyController);
}

function startGame(p1, p2, enemyController) {
    //our players are
    /*
    p1 --> GBPlayerDOM : user
    p2 --> GBEnemyDOM : ememy
    */
    //int phase; P1 will go first
    p1.canGetAttacked = false;
    p2.canGetAttacked = true;

    //when the gameBoardDom.receiveAttack is called for a valid move
    //turns are switched via this call back which uses closures
    //
    const callback = () => {
        //check for winner
        if (p1.gameBoard.allShipsDown() || p2.gameBoard.allShipsDown()) {
            displayWinner(p2.gameBoard.allShipsDown());
            p1.canGetAttacked = true;
            p2.canGetAttacked = true;
            //blocks all moves from being made
        }

        p1.canGetAttacked = !p1.canGetAttacked;
        p2.canGetAttacked = !p2.canGetAttacked;
        if (p1.canGetAttacked) {
            enemyController.sendAttack();
        }
    };
    p1.attackCallback = callback;
    p2.attackCallback = callback;
}

function displayWinner(userWin) {
    const winStr = userWin ? "You" : "The Enemy";
    const winnerContainer = document.querySelector(".winner-cont");
    winnerContainer.classList.remove("void");
    winnerContainer.querySelector("#winner-output").innerHTML = `${winStr} won!`;
}
