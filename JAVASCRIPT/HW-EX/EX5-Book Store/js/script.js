//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
	
  // 1- Check the event if raised on the button delete 
  event.target.parentElement.remove();
  // li.event.target.classList.contain('delete');
  
 //  2  if yes, get the parent and remove it from the  bookList
}

function addBook(event) {
  event.preventDefault();


  // 1- Get the book name from the input field
  let inputField = document.querySelector('#add-book-textfield')
  let task = inputField.value;
  inputField.value="";

  // 2- Create a new spam bookName for the book name, class name = name
  let newbook = document.createElement('li');
  

  let bookName = document.createElement('span');
  bookName.classList.add('name');
  bookName.textContent=task;

  let deleteBtn = document.createElement('span');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent='Delete';

  newbook.appendChild(bookName);
  newbook.appendChild(deleteBtn);

  // 3- Create a new spam deleteBtn for the button delete, class name = delete

  // 4- Create a new li

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  bookList.appendChild(newbook)

}

function searchBook(event) {
  // 1- Get the search text
  let search = document.querySelector('#search-books');
  // getinput = search.children.value.toLowerCase();
  // console.log(getinput)


  // 2- Loop on all LI
  let li = document.querySelector('ul');
  // for (let value of li.children)
     
  //   // Update the style of the LI (visible or hidden)
  
  // }


}

//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
console.log(bookList)
for (let btn of bookList.children){
  btn.addEventListener("click",deleteBook);
}
// bookList.addEventListener("click", deleteBook);


let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);




// function deleteBook(event) {
//   // 1- Check if the event is raised on the delete button
//    // 2- Get the parent li and remove it from the bookList
//    if (event.target.classList.contains('delete')) {
   
//     const parentLi = event.target.parentElement;
//     bookList.removeChild(parentLi);
//   }

// }

// function addBook(event) {
//   event.preventDefault();

//   let inputField = document.querySelector('#add-book-textfield');
//   let task = inputField.value;
//   inputField.value="";

//   let newBook = document.createElement('li');

//   let bookName = document.createElement('span');
//   bookName.classList.add('name');
//   bookName.textContent = task;

//   let deleteBtn = document.createElement('span');
//   deleteBtn.classList.add('delete');
//   deleteBtn.textContent='Delete'

//   newBook.appendChild(bookName);
//   newBook.appendChild(deleteBtn);

//   bookList.appendChild(newBook);
 
//   console.log(bookList)
// }
// function searchBook(event) {
//   // 1- Get the search text
//   const searchText = event.target.value.toLowerCase();

//   // 2- Loop through all LI elements
//   const books = bookList.getElementsByTagName('li');
//   Array.from(books).forEach(function(book) {
//     const bookName = book.querySelector('.name').textContent.toLowerCase();
//     // Update the style of the LI (visible or hidden) based on the search text
//     if (bookName.includes(searchText)) {
//       book.style.display = 'block';
//     } else {
//       book.style.display = 'none';
//     }
//   });
// }

// let bookList = document.querySelector("#book-list ul");
// console.log(bookList)
// bookList.addEventListener("click", deleteBook);

// let addForm = document.getElementById("add-book");
// addForm.addEventListener("click", addBook);

// let searchBookInput = document
//   .getElementById("search-books")
//   .querySelector("input");
// searchBookInput.addEventListener("keyup", searchBook);