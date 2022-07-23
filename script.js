const container = document.querySelector(".container");


function makeSketchPad() {
    const body = document.createElement("div");
    body.setAttribute("class", "sketch-pad")
    container.appendChild(body);
}

window.onload = makeSketchPad();