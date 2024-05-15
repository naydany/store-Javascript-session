function searchList() {
    let output;
    let input = document.getElementById('search');

    output =input.value.toUpperCase();

    let listgroup = document.getElementsByTagName('ul');
    console.log(listgroup[0])
    let li = document.getElementsByTagName('li');
   

    for (let i=0;i<li.length;i++){
        let b=[];
        a = li[i].textContent;
        b.push(a);
        console.log(b)
        if (a.toUpperCase().indexOf(output) > -1){
            li[i].style.display="";
        }else{
            li[i].style.display="none";
        }
    }

}
searchList()