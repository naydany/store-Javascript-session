const randomAuthor = () => {
   // TODO: random author name
}

// search movie title
const searchMovieTitle = (e) => {
    // TODO: search movie by title
    for (let gettr of tr){
        
        let storyname= gettr.firstElementChild.textContent
        let input =searchText.value;

        if (storyname.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
            gettr.style.display ='table-row'
        }else{
            gettr.style.display ='none';
        }
    }

}


// Main
const tr = document.querySelectorAll('tbody tr');
const searchText = document.querySelector('#search');
const showTitle = document.querySelector('h1');

// TODO: Add event listeners on input search
searchText.addEventListener('keyup', searchMovieTitle );

console.log(tr.firstElementChild)
// TODO: call randomAuthor function every 1000 milliseconds