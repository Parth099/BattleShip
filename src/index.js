//css imports
import "./StyleAssets/reset.css";
import "./StyleAssets/style.css";
//functional imports
import gameBoardDom from "./gameBoardDomController";
import gameBoard from "./gameboardFactory";
import DragDropShip from "./DragDropShips";
import cpuPlayer from "./cpuPlayer";

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

const gameBoardPlayer = gameBoard();
const GBDomPlayer = new gameBoardDom("#gamegrid", gameBoardPlayer, shipsInfo);
GBDomPlayer.init();

const dragDropCallback = () => {
    const dragDropPane = document.querySelector(".intro-instructions-cont");
    const enemyBoardCont = document.querySelector(".intro-placement-grid-cont.right");
    dragDropPane.classList.add("void");
    enemyBoardCont.classList.remove("void");

    initAiOpponentDom();
};

//dragDrop 
const boardNodes = document.querySelectorAll(".gamegrid-cell");
const dragDropController = new DragDropShip(".DragDrop-main-cont", shipsInfo, boardNodes, GBDomPlayer, dragDropCallback);
dragDropController.init();

function initAiOpponentDom() {
    const enemyBoard = gameBoard();
    const GBEnemyPlayer = new gameBoardDom("#gamegrid-enemy", enemyBoard, shipsInfo);
    const enemyController = cpuPlayer(enemyBoard);

    enemyController.autoPlaceShips(shipsInfo);
    console.log(enemyBoard.board);

    GBEnemyPlayer.init();
    GBEnemyPlayer.attachAttackListener("#gamegrid-enemy");
}
