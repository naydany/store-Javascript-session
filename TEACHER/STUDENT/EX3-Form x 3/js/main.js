
function getValue(elements) {
    let result = []
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value)
        }
    }
    return result
}

function showCase() {
    
    const cards = document.querySelectorAll('.card'); //list card
    let result;
    for (let card of cards){
        result=card.children[0].textContent;
    }
    console.log(result)
    let arrayCheckbox = getValue(checkboxes); // list array checkbox

    // TODO: 
    //If there is no check, all cards is visible
    //If at least one of them is checked display that card to block otherwise is invisible.

}

// Main
const content = document.querySelector('.content');
const checkboxes = document.querySelectorAll('.lang');



for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', showCase);
}
