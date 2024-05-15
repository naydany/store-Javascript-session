
function getRadioValue(radios) {
    // TODO: get Radio value from radios array
    let text = '';
    for (let Radio of radios) {
        if (Radio.checked) {
            text = Radio.value;
        }
    }
    return text;
}

function getCheckboxValue(checkboxes) {
    // TODO: get Check box value from checkboxes array
    let textch = '';
    for (let check of checkboxes) {
        check.checked = true;
        if (check.checked == true) {
            textch += check.value + ",";
        }
        console.log(check)
    }
    
    return textch
    // Return value example: red, orange, purple
    // remove the last charector by slice(0, -1) 
}


function submitSurvey() {
    let qOne = getRadioValue(questionOne);//TODO;
    let qTwo = getRadioValue(questionTwo);//TODO;
    let qThree = getCheckboxValue(questionThree);//TODO;
    let qFour = getCheckboxValue(questionFour);//TODO;

    answerOne.textContent = qOne;
    answerTwo.textContent = qTwo;
    answerThree.textContent = qThree;
    answerFour.textContent = qFour;
}




// Main
const questionOne = document.querySelectorAll('input[name="q_1"]');

const questionTwo = document.querySelectorAll('input[name="q_2"]');
const questionThree = document.querySelectorAll('.chef');
const questionFour = document.querySelectorAll('.canteen');

const answerOne = document.querySelector('#quality')
const answerTwo = document.querySelector('#taste')
const answerThree = document.querySelector('#chef')
const answerFour = document.querySelector('#canteen')

const submitButton = document.querySelector('#submit');
const questionContainer = document.querySelector('.form-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    resultContainer.classList.remove('hide');
    questionContainer.classList.add('hide');
    // console.log(getRadioValue(questionOne))
    console.log(getCheckboxValue(questionThree))
    submitSurvey();
    
});
