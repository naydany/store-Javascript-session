let students = [
    {
        id: 1,
        name: "John",
        email: "john@example.com",
        phone: "123-456-3303"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        phone: "123-456-3304"
    },
    {
        id: 3,
        name: "Mary",
        email: "mary@example.com",
        phone: "123-456-3305"
    },
    {
        id: 4,
        name: "Peter",
        email: "peter@example.com",
        phone: "123-456-3306"
    },
    {
        id: 5,
        name: "Lisa",
        email: "lisa@example.com",
        phone: "123-456-3307"
    }
];

function createRow(student) {
    // Create tableRow
    let tableRow = document.createElement('tr');

    // Create Id
    let id = document.createElement('td')
    id.textContent = student.id;
    // Create name
    let userName = document.createElement('td');
    userName.textContent = student.name;
    // Create email
    let email = document.createElement('td');
    email.textContent = student.email;
    // Create phone
    let phone = document.createElement('td');
    phone.textContent = student.phone;

    // create action and btn
    let action = document.createElement('td')
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Detail';
    action.appendChild(btn);

    // Append value to tableRow
    tableRow.appendChild(id);
    tableRow.appendChild(userName);
    tableRow.appendChild(email);
    tableRow.appendChild(phone);
    tableRow.appendChild(action);

    // Append tableRow into tbody
    tbody.appendChild(tableRow);
}

function showStudentDetails(student) {
    // catch action 
    let list = student.target.closest('tr');
    // show list
    studentCard.style.display = 'block';
    // get varaible
    let id = document.getElementById('cardId');
    let name = document.getElementById('cardName');
    let email = document.getElementById('cardEmail');
    let phone = document.getElementById('cardPhone');
    // Asign value
    id.textContent =  list.children[0].textContent;
    name.textContent =  list.children[1].textContent;
    email.textContent =  list.children[2].textContent;
    phone.textContent =  list.children[3].textContent;

}

// Main
const tbody = document.getElementById('studentsTableBody');
for (let student of students) {
    createRow(student);
}

//  add event to btn
let btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click',showStudentDetails)
});

