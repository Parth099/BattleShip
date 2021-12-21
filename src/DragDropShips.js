export default class DragDropShip {
    constructor(initialDomString, shipsToPlace, boardNodes) {
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
        this.boardNodes = boardNodes; //NodeList
        this.draggableIndex = -1;
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
            container.dataset.type = ship.shipName;
            container.setAttribute("draggable", "true");
            this.addListeners(container);
            initialLoction.appendChild(container);
        });
        const dragOverEvent = (e) => console.log("S: " + e.target.dataset);
        const dragEnterEvent = (e) => console.log("E: " + e.target.dataset);
        this.addBoardListeners(this.boardNodes);
    }
    addListeners(DomNode) {
        const dragStartOpacity = (evt) => {
            evt.target.classList.add("dragging");
            console.log("DragStart");
        };
        const dragEndOpacity = (evt) => {
            evt.target.classList.remove("dragging");
        };

        DomNode.addEventListener("dragstart", dragStartOpacity);
        DomNode.addEventListener("dragend", dragEndOpacity);
        DomNode.addEventListener("mousedown", (e) => (this.draggableIndex = e.target.dataset.index));
    }
    addBoardListeners(nodes) {
        //highlight tiles
        const dragEnterEvent = (e) => {
            e.target.classList.add("potential-drop");
            console.log("realtime:" + `${e.target.dataset.x},${Number(e.target.dataset.y) - this.draggableIndex}`);
        };
        const dragLeaveEvent = (e) => e.target.classList.remove("potential-drop");

        nodes.forEach((node) => {
            node.addEventListener("dragenter", dragEnterEvent);
            node.addEventListener("dragleave", dragLeaveEvent);
        });
    }
}
