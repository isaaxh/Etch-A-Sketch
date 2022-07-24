const sketchPad = document.querySelector('.sketchPad');
const btnSetSize = document.querySelector('#btnSetSize');


function populateSketchPad(size) {
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    
    for(let i = 0; i < (size * size); i++) {  
        let square = document.createElement('div');
        square.style.backgroundColor = 'red';
        sketchPad.insertAdjacentElement('beforeend',square);    
    }
}

btnSetSize.addEventListener('click', () => {
    const sketchPadSize = document.querySelector('#sizeInput').value;
    populateSketchPad(sketchPadSize);
})
    
    
    