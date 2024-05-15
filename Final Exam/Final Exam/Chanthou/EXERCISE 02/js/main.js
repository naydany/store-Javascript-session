let users = [
    {
      "name": "Madden Medina",
      "gender": "male",
      "company": "BOINK",
      "email": "maddenmedina@boink.com",
      "phone": "+1 (808) 442-3969",
      "address": "486 Jerome Avenue, Staples, American Samoa, 2014"
    },
    {
      "name": "Graves Talley",
      "gender": "male",
      "company": "CEDWARD",
      "email": "gravestalley@cedward.com",
      "phone": "+1 (974) 449-3500",
      "address": "807 Bristol Street, Bascom, Oklahoma, 4102"
    },
    {
      "name": "Parks Greene",
      "gender": "male",
      "company": "ASSISTIA",
      "email": "parksgreene@assistia.com",
      "phone": "+1 (898) 550-2421",
      "address": "392 Schenck Place, Taft, Virginia, 2053"
    },
    {
      "name": "Georgina Bray",
      "gender": "female",
      "company": "GOKO",
      "email": "georginabray@goko.com",
      "phone": "+1 (870) 516-2040",
      "address": "470 Taylor Street, Forbestown, District Of Columbia, 9290"
    },
    {
      "name": "Hoover Lindsey",
      "gender": "male",
      "company": "WAZZU",
      "email": "hooverlindsey@wazzu.com",
      "phone": "+1 (942) 432-2941",
      "address": "389 Herkimer Court, Beaulieu, Colorado, 2949"
    }
  ];

// HTML DOM 
const container=document.querySelector(".container");
const result=document.querySelector("#result");

// Show detail 
let showDetail=(index)=>{
  // Remove detail
  

  // Create new div with id : detail 
  const detail = document.createElement('div');
  detail.setAttribute('id','detail');


  // Create h1 for name 
  const h1 = document.createElement('h1');
  h1.textContent=users[index].name;
  

  // Create p for email 
  const p1 = document.createElement('p');
  h1.textContent=users[index].email;
  
  
  // Create p for phone number 
  const p2 = document.createElement('p');
  h1.textContent=users[index].email;

  // Create p for company name 
  const p3 = document.createElement('p');
  h1.textContent=users[index].company;

  // Create p for address 
  const p4 = document.createElement('p');
  h1.textContent=users[index].address;

  
}


// display result 
for(let index=0; index<users.length; index++){
  let card=document.createElement("div");
  card.className="card";
  card.textContent=users[index].name;
  card.addEventListener("click", () =>{
    showDetail(index);
  });
  result.appendChild(card);
}