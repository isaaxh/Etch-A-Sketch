const container = document.querySelector(".container");
const button = document.querySelector("button");

function makeSketchPad() {
    const body = document.createElement("div");
    body.setAttribute("class", "sketch-pad")
    container.appendChild(body);
    console.log('the div loaded');
}

window.onload = makeSketchPad();