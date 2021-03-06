export default class DragDropShip {
    constructor(initialDomString, shipsToPlace, boardNodes, boardDomController, callback) {
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
            isValid: false,
        };
        this.boardDomController = boardDomController;
        this.endStage = callback;
        this.shipsPlaced = 0;
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
        this.addBoardListeners(this.boardNodes);
    }
    addListeners(DomNode) {
        //mark the dragging element so we can target it later.
        const dragStartEvent = (evt) => {
            evt.target.classList.add("dragging");
            this.draggableData.isValid = false;
        };
        const dragEndEvent = (evt) => {
            evt.target.classList.remove("dragging");
            const node = this.draggableData.node;
            if (typeof node === "undefined" || !this.draggableData.isValid) {
                return;
            } else {
                let [x, y] = [-1, -1];
                if (node.classList.contains("vertical")) {
                    x = this.draggableData.x - this.draggableData.index;
                    y = this.draggableData.y - 0;
                } else {
                    x = this.draggableData.x - 0;
                    y = this.draggableData.y - this.draggableData.index;
                }
                const result = this.boardDomController.placeShip(x, y, node.dataset.type, node.classList.contains("vertical"), this.boardNodes);
                if (result) {
                    node.classList.add("void");
                    node.remove();
                    this.shipsPlaced++;
                }

                if (this.shipsPlaced === this.shipsToPlace.length) {
                    this.endStage();
                }
            }
            //calling for ship placement
        };

        DomNode.addEventListener("dragstart", dragStartEvent);
        DomNode.addEventListener("dragend", dragEndEvent);
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
            this.draggableData.isValid = true;
        };
        const dragLeaveEvent = (e) => {
            e.target.classList.remove("potential-drop");
        };
        nodes.forEach((node) => {
            node.addEventListener("dragenter", dragEnterEvent);
            node.addEventListener("dragleave", dragLeaveEvent);
        });
    }
}
