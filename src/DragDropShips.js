export default class DragDropShip {
    constructor(initialDomString, shipsToPlace) {
        this.initialDomString = initialDomString;

        //array of objects
        /*
        Sample Object:
            {
                shipLength: int
                colorClass: str
            }
        */
        this.shipsToPlace = shipsToPlace;
    }
    init() {
        const initialLoction = document.querySelector(this.initialDomString);
        let cell;
        this.shipsToPlace.forEach((ship) => {
            let container = document.createElement("div");
            container.classList.add("dragDrop-ship");
            for (let i = 0; i < ship.shipLength; i++) {
                cell = document.createElement("div");
                cell.classList.add("gamegrid-cell");
                cell.classList.add(ship.colorClass);
                cell.dataset.index = i;
                container.appendChild(cell);
            }
            container.setAttribute("draggable", "true");
            initialLoction.appendChild(container);
        });
    }
}
