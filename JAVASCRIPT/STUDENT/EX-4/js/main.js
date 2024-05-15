const randomAuthor = () => {
   // TODO: random author name
   let random = Math.floor(Math.random()*nameChers.length);
   showTitle.textContent = nameChers[random];

}

// search movie title
const searchMovieTitle = () => {
    // TODO: search movie by title
    for(let book of tr){
        let cherName = book.firstElementChild.textContent;
        if(cherName.toLowerCase().includes(searchText.value.toLowerCase())){
            book.style.display  = 'block';
        }else{
            book.style.display  = 'none';
        }
    }
}


// Main
const tr = document.querySelectorAll('tbody tr');
const searchText = document.querySelector('#search');
const showTitle = document.querySelector('h1');

// TODO: Add event listeners on input search
searchText.addEventListener('input',searchMovieTitle);

// TODO: call randomAuthor function every 1000 milliseconds
let nameChers = [];
for(let name of tr){
    nameChers.push(name.children[1].textContent);
}

setInterval(randomAuthor,1000);