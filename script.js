const sketchPad = document.querySelector('.sketchPad');
const btnSetSize = document.querySelector('#btnSetSize');
const btnReset = document.querySelector('#btnReset');

function populateSketchPad(size) {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    
    for(let i = 0; i < (size * size); i++) {  
        let square = document.createElement('div');
        square.style.backgroundColor = 'red';
        sketchPad.insertAdjacentElement('beforeend',square);    
    }
}

function sketchPadSizeValidations(size) {
    
    if (size <= 0 || size > 64) {
        return console.log('Please enter a value between 0 and 64');
    } else {
        populateSketchPad(size);
    }
}



btnSetSize.addEventListener('click', () => {
    const sketchPadSize = document.querySelector('#sizeInput').value;
    sketchPadSizeValidations(sketchPadSize);
})
    
btnReset.addEventListener('click', () => {
    sketchPad.textContent = '';
})    
    