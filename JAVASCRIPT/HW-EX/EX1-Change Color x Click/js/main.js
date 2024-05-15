
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function changeColor() {
    // TODO 
    // set the body background to random color
    let color=randomColor();
    document.body.style.backgroundColor=color;

}
console.log(randomColor())
// click on browser window to change color
document.addEventListener('click', changeColor)