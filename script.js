const sketchPad = document.querySelector('.sketchPad');
const btnSetSize = document.querySelector('#btnSetSize');
const btnReset = document.querySelector('#btnReset');


function populatePad(size) {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    
    //const marker = 'black'
    
    for(let i = 0; i < (size * size); i++) {  
        const square = document.createElement('div');
        square.classList.add('divsInsidePad');
        //square.addEventListener('mousedown', markingThePad(marker, square))
        square.addEventListener('mouseover', () => {
             square.style.backgroundColor = 'black';
        })
        
        sketchPad.insertAdjacentElement('beforeend',square);    
    }
}

function markingThePad(color, targetDiv) {
    console.log('this works')
    targetDiv.style.backgroundColor = color;
}

function sizeValidation(size) {  
    if (size <= 0 || size > 64) {
        return console.log('Please enter a value between 0 and 64');
    } else {
        sketchPad.textContent = '';
        populatePad(size);
    }
}

btnSetSize.addEventListener('click', () => {
    const sketchPadSize = document.querySelector('#sizeInput').value;
    sizeValidation(sketchPadSize);
})

btnReset.addEventListener('click', () => {
    sketchPad.textContent = '';
})    

//populatePad(sketchPadSize);
//const sketchPadSize = document.querySelector('#sizeInput').value
//window.onload = populatePad(sketchPadSize)