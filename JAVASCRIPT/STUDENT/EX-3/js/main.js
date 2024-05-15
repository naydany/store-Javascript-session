
const  clearInput = (value) => {
   //TODO: Clear data from input field
   return value == "";
}

const createRow = (event) => {
   event.preventDefault();
   // TODO: Create new row with data from input field
 
   let tableRow = document.createElement('tr');
   let first_name = document.createElement('td');
   let last_name = document.createElement('td');
   let Province = document.createElement('td');
   let Gender = document.createElement('td');
   let Skill = document.createElement('td');
   let Commend = document.createElement('td');

   first_name.textContent  = firstName.value;
   last_name.textContent  = lastName.value;
   Province.textContent  = province.value;

   for(let gender of genders){
      if(gender.checked){
         Gender.textContent  = gender.value;
      }
   

   let mainSkill = '';
   for(let skill of skills){
      if(skill.checked){
         mainSkill += skill.value + ' , ';
      }
   }
   console.log(mainSkill);
   Skill.textContent  = mainSkill.slice(0,-2);
   Commend.textContent  = comment.value;

   tableRow.appendChild(first_name);
   tableRow.appendChild(last_name);
   tableRow.appendChild(Province);
   tableRow.appendChild(Gender);
   tableRow.appendChild(Skill);
   tableRow.appendChild(Commend);

   tbody.appendChild(tableRow);

   if(firstName.value != ""){
      clearInput(firstName.value);
   }
}

}
// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const province = document.querySelector('#province');
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');
const comment = document.querySelector('#comment');
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');
// TODO: add event listeners to submit button
btnSubmit.addEventListener('click',createRow)