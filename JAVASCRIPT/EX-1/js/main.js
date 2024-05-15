
const searchCountry = () => {
    // TODO: search company name using indexOf()
}


// Main
const tbody = document.querySelectorAll('tbody tr');
const search = document.querySelector('#search');

search.addEventListener('keyup', searchCountry);