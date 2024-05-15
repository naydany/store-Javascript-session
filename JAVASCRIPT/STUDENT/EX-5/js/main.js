
// Remove row functions from the table
const removeRow = (event) => {
   // TODO: Remove row with confirmation message when click on remove button
   let row = event.target.closest('tr');
   let comfirm = confirm('Are you sure you want to remove this user?');
   if (comfirm){
    row.remove()
   }
}

// View user information in list 
const viewUser = (event) => {
    // TODO: View user information in list by click on view button
    let informations = event.target.closest('tr');

    
    first_name.textContent = informations.children[0].textContent;
    last_name.textContent = informations.children[1].textContent;
    province.textContent = informations.children[2].textContent;
    gender.textContent = informations.children[3].textContent;

    ul.appendChild(first_name);
    ul.appendChild(last_name);
    ul.appendChild(province);
    ul.appendChild(gender);

}

// Main
const leftBox = document.querySelector('.left-box');
const btnViews = document.querySelectorAll('.view');
const btnRemoves = document.querySelectorAll('.remove');

let ul = document.querySelector('ul');
let first_name = document.createElement('li');
let last_name = document.createElement('li');
let province = document.createElement('li');
let gender = document.createElement('li');


// TODO: Add Event listeners to remove button
for(let btnRemove of btnRemoves){
    btnRemove.addEventListener('click',removeRow);
}

// TODO: Add event listeners to view button
for(let btnView of btnViews){
    btnView.addEventListener('click',viewUser);
}