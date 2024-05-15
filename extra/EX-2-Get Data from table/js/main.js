let btns= document.getElementsByClassName('btn');


function toDelete(e){
    e.target.parentElement.parentElement.remove()

    let results=e.target.parentElement.parentElement.children
    for (let result of results){
        console.log(result.textContent)
        
        let div = document.createElement('div');
        div.classList.add('detail');
        let p = document.createElement('p');
        p.className='par';
        p.textContent=result.textContent;
        div.appendChild(p)
        document.body.appendChild(div)
        console.log(div)
    }
}

for (let btn of btns){
    btn.addEventListener('click',toDelete)
}
