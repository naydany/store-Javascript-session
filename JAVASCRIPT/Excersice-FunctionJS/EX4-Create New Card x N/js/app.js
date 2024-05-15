// create a new card
function createCard() {
   const card = document.createElement('div');
   card.classList.add('card');

 
     // TODO CARD BODY 
  // Create a div named "cardBody"
  // Add class name "card-body" to cardBody
  // append cardBody to card 
  const cardBody = document.createElement('div');
  cardBody.className='card-body';
  card.append(cardBody);
  

  
  // TODO CARD IMAGE 
  // create a img named cardImage
  cardImage = document.createElement('img');
  // add src images/sample.png to the cardImage 
  cardImage.src = 'images/sample.png';
  // append cardImage to cardBody 
  cardBody.append(cardImage);


  //  TODO CARD TEXT 
  // Create a p named cardText
  const cardText = document.createElement('p');
  // add text above to cardText
  cardText.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque.";
  // text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque."
  // append cardText to cardBody 
  cardBody.append(cardText);
  

  // TODO CARD FOOTER 
  // create a div named cardFooter
  const cardfooder = document.createElement('div');
  // add class name "card-footer" to cardFooter
  cardfooder.className = 'card-footer',numberOfCard;
  // append cardFooter to  card
  card.append(cardfooder)


  // TODO BUTTON IN CARD FOOTER 
  // create a button named cardButton
  cardbutton = document.createElement('button');
  // add class name "button" to cardButton
  cardbutton.className = 'button';
  // add text content "Add Card" to cardButton 
  cardbutton.textContent='Remove card';
  // append cardButton to cardFooter 
  cardfooder.append(cardbutton);
  console.log(cardfooder)

   
   // add card to containers
   container.appendChild(card)
}

// Number of card
function numberOfCard() {
   n = number.value;
   // TODO 
   for (let i=0; i<n; i++){
      createCard();
   }
}




// Main
const btnCreate = document.querySelector('#create');
const number = document.querySelector('#input');
const container = document.querySelector('.container');

btnCreate.addEventListener('click', numberOfCard);