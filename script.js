const sketchPad = document.querySelector('.sketchPad');
const btnSetSize = document.querySelector('#btnSetSize');
const btnReset = document.querySelector('#btnReset');
let sketchPadSize = document.querySelector('#sizeInput').value;
let color = 'rgb(39, 38, 38)';

function populatePad(size) {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        
    for(let i = 0; i < (size * size); i++) {  
        const square = document.createElement('div');
        square.classList.add('divsInsidePad');
        square.addEventListener('mouseover', colorSquare)
        sketchPad.insertAdjacentElement('beforeend',square);    
    }
}

function colorSquare() {
    console.log('this works')
    this.style.backgroundColor = color;
}

function sizeValidation(size) {  
    if (size <= 0 || size > 64) {
        return console.log('Please enter a value between 0 and 64');
    } else {
        sketchPad.textContent = '';
        populatePad(size);
    }
}

const padSize1 = btnSetSize.addEventListener('click', () => {
    sketchPadSize = document.querySelector('#sizeInput').value;
    sizeValidation(sketchPadSize);
})

btnReset.addEventListener('click', () => {
    sketchPad.textContent = '';
    console.log(padSize1);
    populatePad(sketchPadSize);
})    

function rainbowColor() {

}

function changeColor(choice) {
    color = choice;
}

window.onload = populatePad(sketchPadSize);