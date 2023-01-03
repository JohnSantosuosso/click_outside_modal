const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');


function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card'); //like querySelector all for closest class
  //Grab image source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description; //because we are using data
  const name = card.querySelector('h2').textContent;
  //populate modal with new info
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}"
  alt="${name}"/>
  <p>${desc}</p>
  `;
  //show modal
  modalInner.outerHTML.classList.add('open');
};

//have to use forEach because we have multiple cards
cardButtons.forEach(button => 
  button.addEventListener('click', handleCardButtonClick)
);


//close modal
function closeModal() {
  modalOuter.classList.remove('open');
};

modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner'); //tells us anything inside modal inner is okay, but any element outside of inner (like outer or close, it won't find anything)
  if (isOutside) { //checks boolean from above (indicated by !)
    closeModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
