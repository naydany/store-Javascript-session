
const  clearInput = () => {
   //TODO: Clear data from input field
   
}

const createRow = (event) => {
   // TODO: Create new row with data from input field
   
   let getgenders ='Male';
   for (let getinput of genders){
      if (getinput.checked){
         getgenders=getinput.value;
      }
   }
   let skillinput="" ;
   for (let getskill of skills){
      if ( getskill.checked===true){
         skillinput+=getskill.value+','
      }
   }

   for (let provinceinput of provinces){
      console.log(provinceinput)
   }
   let tableRow = document.createElement('tr');

   let firstname = document.createElement('td');
   firstname.textContent=firstName.value;

   let lastname = document.createElement('td');
   lastname.textContent=lastName.value;

   let province = document.createElement('td');
   province.textContent=province.value;

   let gender = document.createElement('td');
   gender.textContent=getgenders;
   console.log(gender)
   let skill = document.createElement('td');
   skill.textContent=skillinput;

   let comment = document.createElement('td');
   comment.textContent=comment.value;



   tbody.appendChild(tableRow)
   tableRow.appendChild(firstname)
   tableRow.appendChild(lastname)
   tableRow.appendChild(province)
   tableRow.appendChild(gender)
   tableRow.appendChild(skill)
   tableRow.appendChild(comment)

}


// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');

const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');

const comments = document.querySelector('#comment');
console.log(comment)
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');

// TODO: add event listeners to submit button
btnSubmit.addEventListener('click',(e) => {
   e.preventDefault();
   createRow();

})