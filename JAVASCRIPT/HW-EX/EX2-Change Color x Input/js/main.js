


function changeColor() {
    // TODO
    // change body color to color that get from input type color
     let color = inputColor.value;
     document.body.style.backgroundColor=color;
}

// Main
const inputColor = document.querySelector('#color')

// click on browser window to change color
document.addEventListener('change', changeColor)