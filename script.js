const sketchPad = document.querySelector('.sketchPad');
const btnSetSize = document.querySelector('#btnSetSize');
const btnReset = document.querySelector('#btnReset');
const btnBlack = document.querySelector('#btnBlack');
const btnRainbow = document.querySelector('#btnRainbow');
const btnEraser = document.querySelector('#btnEraser');
const btnDisplayOptions = document.querySelector('.btnDisplayOptions');
const optionsContainer = document.querySelector('.optionsContainer');
const blackColor = 'rgb(39, 38, 38)';
let sketchPadSize = document.querySelector('#sizeInput').value;
let color = 'rgb(39, 38, 38)';
let isShowOptions = false;


function populatePad(size) {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    for(let i = 0; i < (size * size); i++) {  
        const square = document.createElement('div');
        square.classList.add('squaresInsidePad');
        square.addEventListener('mouseover', colorSquare);
        square.addEventListener('touchmove', colorSquare)
        sketchPad.insertAdjacentElement('beforeend',square);    
    }
}

function colorSquare() {
    if (color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function sizeValidation(size) {  
    if (size <= 0 || size > 64) {
        return console.log('Please enter a value between 0 and 64');
    } else {
        sketchPad.textContent = '';
        populatePad(size);
    }
}

function changeColor(choice) {
    color = choice;
}

btnSetSize.addEventListener('click', () => {
    sketchPadSize = document.querySelector('#sizeInput').value;
    sizeValidation(sketchPadSize);
})

btnReset.addEventListener('click', () => {
    sketchPad.textContent = '';
    populatePad(sketchPadSize);
})    

btnBlack.onclick = () => {
    changeColor(blackColor);
    btnBlack.style.backgroundColor = blackColor;
    btnBlack.style.color = 'white';
    btnRainbow.style.backgroundColor = 'transparent';
    btnRainbow.style.color = blackColor;
    btnEraser.style.backgroundColor = 'transparent';
    btnEraser.style.color = blackColor;
}

btnRainbow.onclick = () => {
    changeColor('random')
    btnBlack.style.backgroundColor = 'transparent';
    btnBlack.style.color = blackColor;
    btnRainbow.style.backgroundColor = blackColor;
    btnRainbow.style.color = 'white';
    btnEraser.style.backgroundColor = 'transparent';
    btnEraser.style.color = blackColor;
}

btnEraser.onclick = () => {
    changeColor('white')
    btnBlack.style.backgroundColor = 'transparent';
    btnBlack.style.color = blackColor;
    btnRainbow.style.backgroundColor = 'transparent';
    btnRainbow.style.color = blackColor;
    btnEraser.style.backgroundColor = blackColor;
    btnEraser.style.color = 'white';
}

btnDisplayOptions.onclick = () => {
    
    if (isShowOptions === false) {
        btnDisplayOptions.style.backgroundColor = blackColor;
        btnDisplayOptions.style.color = 'white';
        optionsContainer.style.display = 'flex';
        isShowOptions = true;
    } else {
        btnDisplayOptions.style.backgroundColor = 'transparent';
        btnDisplayOptions.style.color = blackColor;
        optionsContainer.style.display = 'none';
        isShowOptions = false;
    }
    
}

window.onload = populatePad(sketchPadSize);