let btns= document.getElementsByClassName('btn');

function toDelete(e){
    e.target.parentElement.parentElement.remove()
}

for (let btn of btns){
    btn.addEventListener('click',toDelete)
}
