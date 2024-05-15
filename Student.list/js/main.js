let students = [
    {
        id: 1,
        name: "John",
        age: 25,
        province: "Banteay Mean Chey",
        gender: "Male",
        email: "john@example.com"
    },
    {
        id: 2,
        name: "Jane",
        age: 26,
        province: "Battambang",
        gender: "Female",
        email: "jane@example.com"
    },
    {
        id: 3,
        name: "dara",
        age: 30,
        province: "Siem Riep",
        gender: "Male",
        email: "dara@example.com"
    },
    {
        id: 4,
        name: "Mary",
        age: 29,
        province: "Kampot",
        gender: "Female",
        email: "mary@example.com"
    },
    {
        id: 5,
        name: "Lisa",
        age: 28,
        province: "Phuket",
        gender: "Female",
        email: "lisa@example.com"
    }
];

// // Create row
function createRow(data) {
    let row = document.createElement('tr');
    let id = document.createElement('td');
    let name = document.createElement('td');
    let age = document.createElement('td');
    let province = document.createElement('td');
    let gender = document.createElement('td');
    let email = document.createElement('td');

    id.textContent = data.id;
    name.textContent = data.name;
    age.textContent = data.age;
    province.textContent = data.province;
    gender.textContent = data.gender;
    email.textContent = data.email;

    row.appendChild(id);
    row.appendChild(name);
    row.appendChild(gender);
    row.appendChild(age);
    row.appendChild(province);
    row.appendChild(email);
    
    return row;
}

// Main
const tbody = document.querySelector('tbody');
for (let student of students) {
    let row = createRow(student);
    tbody.appendChild(row);
}