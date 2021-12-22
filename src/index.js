//css imports
import "./StyleAssets/reset.css";
import "./StyleAssets/style.css";
//functional imports
import gameBoardDom from "./gameBoardDomController";
import gameBoard from "./gameboardFactory";
import DragDropShip from "./DragDropShips";

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

const boardNodes = document.querySelectorAll(".gamegrid-cell");
const dragDropController = new DragDropShip(".DragDrop-main-cont", shipsInfo, boardNodes, GBDomPlayer);
dragDropController.init();
