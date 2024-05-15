
function AddPerson() {
    // to check gender 
    let sex = gender.checked ? gender.value : 'Female';

    let tbody = document.querySelector('tbody');
  
    // create table row name tableRow 
    let tr = document.createElement('tr');
    console.log(tr);

    // // create table data name tdFirstName 
    let tdFrirstname = document.createElement('td');
    tdFrirstname.name= 'tdFirstName ';
    tdFrirstname.textContent=firstName.value;
    // tr.appendChild(tdFrirstname)


    
    // // add value of firstName as textContent 

    // // create table data name tdLastName
    // // add value of lastName as textContent 
    let tdLastname = document.createElement('td');
    tdLastname.name= 'tdLastname ';
    tdLastname.textContent=lastName.value;
    // create table data name tdEmail
    // add value of email as textContent 
    let tdEmail = document.createElement('td');
    tdEmail.name= 'tdEmail ';
    tdEmail.textContent=email.value;
    // create table name tdProvince
    // add value of province as textContent
    let tdProvince = document.createElement('td');
    tdProvince.name= 'tdProvince ';
    tdProvince.textContent=province.value;
    // create table data name tdFavourite 
    // add value of favourite as textContent
    let tdFavourite = document.createElement('td');
    tdFavourite.name= 'tdFavourite ';
    tdFavourite.textContent=favourite.value;
    // create table data name tdGender 
    // add value of sex as textContent
    let tdGender = document.createElement('td');
    tdGender.name= 'tdGender ';
    tdGender.textContent=sex;

    // append tdFirstName, tdLastName, tdEmail, tdProvince, tdGender, tdFavourite to tableRow
    tr.appendChild(tdFrirstname);
    tr.appendChild(tdLastname);
    tr.appendChild(tdGender);
    tr.appendChild(tdEmail);
    tr.appendChild(tdProvince);
    tr.appendChild(tdFavourite);

    // append tableRow to tbody 
    
    tbody.appendChild(tr);

    // console.log(tbody)
}



// Main
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const province = document.querySelector('#province');
const favourite = document.querySelector('#favorite');
let gender = document.querySelector('input[name="gender"]');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('tbody');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    AddPerson();

    
});