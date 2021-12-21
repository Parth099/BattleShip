//css imports
import "./StyleAssets/reset.css";
import "./StyleAssets/style.css";
//functional imports
import gameBoardDom from "./gameBoardDomController";
import gameBoard from "./gameboardFactory";
import DragDropShip from "./DragDropShips";

const GBDomPlayer = new gameBoardDom("#gamegrid", {});
GBDomPlayer.init();

const shipsToPlace = [
    {
        shipLength: 2,
        colorClass: "c1",
    },
    {
        shipLength: 3,
        colorClass: "c2",
    },
    {
        shipLength: 3,
        colorClass: "c3",
    },
    {
        shipLength: 4,
        colorClass: "c4",
    },
    {
        shipLength: 5,
        colorClass: "c5",
    },
];
const dragDropController = new DragDropShip(".DragDrop-main-cont", shipsToPlace);
dragDropController.init();
