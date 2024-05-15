//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  let book = event.target.closest('li')
  // if (event.target === book.lastElementChild){
  //   book.remove();
  // }
  if (event.target.className === "delete"){
    book.remove();
  }
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  let input = document.querySelectorAll('input');
  let book_name = input[1].value;

 
  // 2- Create a new spam bookName for the book name, class name = name
  let bookName = document.createElement('span');
  bookName.classList.add('name');
  bookName.textContent = book_name;


  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  let deleteBtn = document.createElement('span');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = 'delete';

  // 4- Create a new li
  let li = document.createElement('li');

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  let bookList = document.querySelector('ul');
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  bookList.appendChild(li);

}

// Tver do by my self style indexof by get value (if it no has it will show value -1 )
function searchBook(event) {
  // 1- Get the search text
  let searchText = event.target.value;
  const books = document.querySelectorAll('li');
  // 2- Loop on all LI
//   for (let i = 0; i < books.length; i++){
//     let book = books[i].firstElementChild;
//     if (book){
//       let name = book.textContent;
//       // count numbers
//       if (name.toUpperCase().indexOf(searchText.toUpperCase()) > -1){
//         books[i].style.display = "block";
//       }else{
//         // Update the style of the LI (visible or hidden)
//         books[i].style.display = "none";
//       }
//     }
//   }
// }

// in short using indexof
  // for (let i = 0; i < books.length; i++){
  //   let bookName = books[i].firstElementChild.textContent;
  //     // count numbers
  //     if (bookName.toUpperCase().indexOf(searchText.toUpperCase()) > -1){
  //       books[i].style.display = "block";
  //     }else{
  //       // Update the style of the LI (visible or hidden)
  //       books[i].style.display = "none";
  //     }
  // }

// in short using search
  for (let i = 0; i < books.length; i++){
    let bookName = books[i].firstElementChild.textContent;
      // count numbers
      if (bookName.toUpperCase().search(searchText.toUpperCase()) > -1){
        books[i].style.display = "block";
      }else{
        // Update the style of the LI (visible or hidden)
        books[i].style.display = "none";
      }
  }
}

// Do my teacher Heang
// function searchBook(event) {
//   // 1- Get the search text
//   let searchText = event.target.value;
//   console.log(searchText);

//   // 2- Loop on all LI
//   let listLi = document.querySelectorAll('li');
//   if (searchText === ""){
//     for(let li of listLi) {
//         li.style.display = 'block';
//     }
//   }
//   else{
//     for(let li of listLi) {
//       let spanContent = li.firstElementChild.textContent.toUpperCase()
//       if(spanContent.includes(searchText.toUpperCase()) === false) {
//         console.log(spanContent.includes(searchText.toUpperCase()));
//       // Update the style of the LI (visible or hidden)
//         li.style.display = 'none';
//         }
//     }
//   }
// }




//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
  
searchBookInput.addEventListener("keyup", searchBook);
