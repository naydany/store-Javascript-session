// // TODO 



// let booknames = document.querySelectorAll('.book-name');

// for (let bookname of booknames){
//     console.log(bookname.textContent);
// }
// // console.log(booknames.length)


// let sumName = document.createElement('p');
// sumName.getElementsById= 'books-number';
// sumName.textContent = booknames.length
// booknames.append(sumName)
// console.log(sumName)



// // let deleteList = document.querySelectorAll('.delete');
// // for(let btn of deleteList){
// //     btn.addEventListener('click',(event) =>{
// //         event.target.closest('li').remove()
// //     })
// // }


// Get the book list element
const booklist = document.querySelector('#book-list');
console.log(booklist)
// Create an empty array to store the book names
const booknames = [];

// Iterate over the book list elements
for ( book of booklist.querySelectorAll('li')){
  // Get the book name
    const bookname =book.querySelector('.book-name').textContent;
  // Add the book name to the array
    booknames.push(bookname)

}

// Count the number of books
document.querySelector('#books-number').textContent = booklist.querySelectorAll('li').length;

// Update the summary element with the results
document.querySelector('#books-titles').textContent = booknames.join(' , ') ;