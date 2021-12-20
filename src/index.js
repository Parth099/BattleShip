import "./StyleAssets/reset.css";
import "./StyleAssets/style.css";

const z = document.getElementById("gamegrid");
for (let k = 0; k < 100; k++) {
    let p = document.createElement("div");
    p.classList.add("gamegrid-cell");
    z.appendChild(p);
}
