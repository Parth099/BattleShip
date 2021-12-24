//css imports
import "./StyleAssets/reset.css";
import "./StyleAssets/style.css";
//functional imports
import gameBoardDom from "./gameBoardDomController";
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
const GBDomPlayer = new gameBoardDom("#gamegrid", gameBoardPlayer, shipsInfo);
GBDomPlayer.init();

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
const dragDropController = new DragDropShip(".DragDrop-main-cont", shipsInfo, boardNodes, GBDomPlayer, dragDropCallback);
dragDropController.init();


//ship placement is now done
//hide the placement pane and start creating the other enemy side
function initAiOpponentDom() {
    const enemyBoard = gameBoard();
    const GBEnemyPlayer = new gameBoardDom("#gamegrid-enemy", enemyBoard, shipsInfo);

    const boardNode = document.querySelector("#gamegrid");
    const enemyController = cpuPlayer(enemyBoard, boardNode, GBDomPlayer);

    enemyController.autoPlaceShips(shipsInfo);
    console.log(enemyBoard.board);

    GBEnemyPlayer.init();
    GBEnemyPlayer.attachAttackListener("#gamegrid-enemy");

    // for (let i = 0; i < 100; i++) {
    //     enemyController.sendAttack();
    // }
}
