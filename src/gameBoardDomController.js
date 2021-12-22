export default class gameBoardDom {
    constructor(domString, gameBoard, shipsInfo) {
        this.domString = domString;
        this.boardSize = 10;
        this.gameBoard = gameBoard;

        this.shipsInfoMap = new Map();
        shipsInfo.forEach((s) => this.shipsInfoMap.set(s.shipName, s));
    }
    init() {
        //const textNode = "gamegrid-text";
        const hoverInEvent = (e) => {
            const cell = e.target.querySelector(".gamegrid-text");
            if (cell) cell.classList.remove("invis");
        };
        const hoverOutEvent = (e) => {
            const cell = e.target.querySelector(".gamegrid-text");
            if (cell) cell.classList.add("invis");
        };
        const attachPoint = document.querySelector(this.domString);
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                let cell = document.createElement("div");
                cell.classList.add("gamegrid-cell");
                cell.dataset.x = i;
                cell.dataset.y = j;

                let text = document.createElement("span");
                cell.appendChild(text);
                text.innerText = `${String.fromCharCode(96 + i + 1)}${j + 1}`;
                text.classList.add("gamegrid-text");
                text.classList.add("invis");

                cell.addEventListener("mouseover", hoverInEvent);
                cell.addEventListener("mouseout", hoverOutEvent);
                attachPoint.appendChild(cell);
            }
        }
    }
    placeShip(x, y, type, isVert, colorSpace) {
        const shipData = this.shipsInfoMap.get(type);
        const placementResult = this.gameBoard.placeShip(x, y, shipData.shipLength, isVert);
        if (placementResult) {
            if (isVert) {
                for (let i = 0; i < shipData.shipLength; i++) {
                    colorSpace[(x + i) * 10 + y].classList.add(shipData.colorClass);
                }
            } else {
                for (let i = 0; i < shipData.shipLength; i++) {
                    colorSpace[x * 10 + y + i].classList.add(shipData.colorClass);
                }
            }
        }
        return placementResult;
    }
}
