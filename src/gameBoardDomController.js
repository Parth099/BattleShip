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
        let loc;
        if (placementResult) {
            if (isVert) {
                for (let i = 0; i < shipData.shipLength; i++) {
                    loc = (x + i) * 10 + y;
                    colorSpace[loc].classList.add(shipData.colorClass);
                    colorSpace[loc].dataset.ship = type;
                }
            } else {
                for (let i = 0; i < shipData.shipLength; i++) {
                    loc = x * 10 + y + i;
                    colorSpace[loc].classList.add(shipData.colorClass);
                    colorSpace[loc].dataset.ship = type;
                }
            }
        }
        return placementResult;
    }
    attachAttackListener(domString) {
        const nodeList = document.querySelectorAll(domString);
        const clickEvent = (e) => {
            let node = e.target;
            if (node.classList.contains("gamegrid-text")) {
                //event bubbling causes issue here
                node = e.target.parentNode;
            }
            let [x, y] = [node.dataset.x, node.dataset.y];

            //rare event when user clicks between boxes
            if (typeof x === "undefined" || typeof y === "undefined") {
                return;
                //they can simply try again
            }
            this.receiveAttack(x, y, node);
        };

        nodeList.forEach((node) => {
            node.addEventListener("click", clickEvent);
        });
    }

    receiveAttack(x, y, boardNode) {
        const attackResult = this.gameBoard.receiveAttack(x, y);
        if (attackResult > 0) {
            boardNode.classList.add("hit");

            //this field will be for the Enemy DOM side
            if (boardNode.dataset.ship) {
                let shipDataObj = this.shipsInfoMap.get(boardNode.dataset.ship);
                boardNode.classList.remove(shipDataObj.colorClass);
            }
        } else if (attackResult == 0) {
            boardNode.classList.add("miss");
        }

        if (attackResult >= 0) {
            return true;
        }
        return false;
    }
}
