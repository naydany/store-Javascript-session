// normal color

function randomColor() {
    const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f']
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15);
        color += colorCode[index];
    }
    return color;
}

// Gradient color
// function randomGradientColor() {

//     return //TODO
// }

function generate() {
    let resultone = randomColor();
    let resulttwo = randomColor();
    let angle="to right";
    let Gradient = 'linear-gradient(' + angle + ',' +resultone + ','+ resulttwo + ')';
    document.body.style.background= Gradient;
}
// set background color to body =  color code

// generate()
// setInterval(generate,1000);
// document.getElementsByClassName("change-color-btn").addEventListener("click", generate);
document.addEventListener("click",function(){
    x = (generate(),100)
})
// add text content to h1 = color code