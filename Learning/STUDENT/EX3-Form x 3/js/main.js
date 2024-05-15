
function getValue(elements) {
    let result = [];
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value);
        }
    }
    return result;
}

function showCase() {
    
    const cards = document.querySelectorAll('.card'); //list card

    let arrayCheckbox = getValue(checkboxes); // list array checkbox
    console.log(!arrayCheckbox);
    console.log(boxchecked.checked)
    let nameHeader='';
    for (let card of cards){
        // nameHeader.push(card.firstElementChild.textContent);
        nameHeader=card.firstElementChild.textContent
        // console.log(arrayCheckbox.includes(nameHeader))
        if (arrayCheckbox==='[]')
        {
            card.classList.add('hide')
        }else if( arrayCheckbox.includes(nameHeader)===true)
        {
            card.classList.add('show')
        }else if(arrayCheckbox.includes(nameHeader)===false){
            card.classList.add('hide')
        }else if(!arrayCheckbox){
            card.remove()
        }



    }
 
    

    // for (let value of arrayCheckbox){
    //    console.log(nameHeader.includes(value))
    // }
    // console.log(arrayCheckbox)

    

   


    // let arrayCheck='';
    // for (let value of arrayCheckbox){
    //     // console.log(value)
    //     arrayCheck=value;
    // }
    // console.log(arrayCheck)

    // let arrcard='';
    // for (let card of cards)
    // {
    //     if(card.children.textContent===arrayCheck){
    //         arrcard=card;
    //     }
    // }
    // console.log(arrcard)      



    // TODO: 
    //If there is no check, all cards is visible
    //If at least one of them is checked display that card to block otherwise is invisible.

}

// Main
const content = document.querySelector('.content');
const checkboxes = document.querySelectorAll('.lang');



const boxchecked = document.querySelector('.lang');



for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', showCase);
}



