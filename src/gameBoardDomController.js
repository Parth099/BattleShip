export default class gameBoardDom {
    constructor(domString, gameBoard) {
        this.domString = domString;
        this.boardSize = 10;
        this.ganeboard = gameBoard;
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
}
