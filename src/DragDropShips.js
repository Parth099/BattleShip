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
        this.draggableData = {
            index: -1,
            node: undefined,
            x: -1,
            y: -1,
        };
    }
    init() {
        const initialLoction = document.querySelector(this.initialDomString);
        const rotateEvent = (e) => {
            //improve this
            const parent = e.target.parentNode;

            if (typeof parent === "undefined") {
                return;
            }

            if (parent.classList.contains("vertical")) {
                parent.classList.remove("vertical");
            } else {
                parent.classList.add("vertical");
            }
        };

        let cell;
        this.shipsToPlace.forEach((ship) => {
            let shipContainer = document.createElement("div");
            shipContainer.classList.add("dragDrop-ship");
            for (let i = 0; i < ship.shipLength; i++) {
                cell = document.createElement("div");
                cell.classList.add("gamegrid-cell");
                cell.classList.add(ship.colorClass);
                cell.dataset.index = i;
                shipContainer.appendChild(cell);
            }
            shipContainer.dataset.type = ship.shipName;
            shipContainer.addEventListener("dblclick", rotateEvent, { capture: true });
            shipContainer.setAttribute("draggable", "true");
            this.addListeners(shipContainer);
            initialLoction.appendChild(shipContainer);
        });
        const dragOverEvent = (e) => console.log("S: " + e.target.dataset);
        const dragEnterEvent = (e) => console.log("E: " + e.target.dataset);
        this.addBoardListeners(this.boardNodes);
    }
    addListeners(DomNode) {
        //mark the dragging element so we can target it later.
        const dragStartOpacity = (evt) => {
            evt.target.classList.add("dragging");
        };
        const dragEndOpacity = (evt) => {
            evt.target.classList.remove("dragging");
            const node = this.draggableData.node;
            if (typeof node === "undefined") {
                return;
            } else {
                if (node.classList.contains("vertical")) {
                    console.log(this.draggableData.x - this.draggableData.index, this.draggableData.y - 0);
                } else {
                    console.log(this.draggableData.x - 0, this.draggableData.y - this.draggableData.index);
                }
            }
            //calling for ship placement
        };

        DomNode.addEventListener("dragstart", dragStartOpacity);
        DomNode.addEventListener("dragend", dragEndOpacity);
        DomNode.addEventListener("mousedown", (e) => {
            this.draggableData.index = e.target.dataset.index;
            this.draggableData.node = e.target.parentNode;
        });
    }
    addBoardListeners(nodes) {
        //highlight tiles
        const dragEnterEvent = (e) => {
            e.target.classList.add("potential-drop");
            this.draggableData.x = e.target.dataset.x;
            this.draggableData.y = e.target.dataset.y;
        };
        const dragLeaveEvent = (e) => e.target.classList.remove("potential-drop");
        nodes.forEach((node) => {
            node.addEventListener("dragenter", dragEnterEvent);
            node.addEventListener("dragleave", dragLeaveEvent);
        });
    }
}
