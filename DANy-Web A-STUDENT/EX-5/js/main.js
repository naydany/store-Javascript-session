
// Remove row functions from the table
const removeRow = (event) => {
    // TODO: Remove row with confirmation message when click on remove button
    console.log(event.target.closest('tr'));
    let isConfrim = confirm('Are you want to delete?')
    let tableRow = event.target.closest('tr');
    if (isConfrim) {
        tableRow.remove()
    }
}

// View user information in list 
const viewUser = (event) => {
    // TODO: View user information in list by click on view button
    let ul = document.querySelector('ul');

    let li = document.createElement('li');

    let nameFruit = event.target.closest('tr');
    let nameFruits=nameFruit.children
    for (let i=0;i<nameFruits.length;i++){
        console.log(nameFruits[i].textContent)

    }

    ul.appendChild(li);


}

// Main
const leftBox = document.querySelector('.left-box');
const btnViews = document.querySelectorAll('.view');
console.log(btnViews)
const btnRemoves = document.querySelectorAll('.remove');

// TODO: Add Event listeners to remove button
for (let btnRemove of btnRemoves) {
    btnRemove.addEventListener('click', removeRow);
}

// TODO: Add event listeners to view button
for (let btnView of btnViews) {
    btnView.addEventListener('click', viewUser);

}
