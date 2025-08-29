const list = document.querySelector('.hotels-list');
const cards = document.querySelectorAll('.hotels-card');
const buttonGrid = document.querySelector('.button-search-grid');
const buttonCards = document.querySelector('.button-search-cards');
const buttonList = document.querySelector('.button-search-list');

function changeStyle(newStyle) {
  list.classList.remove('grid', 'cards', 'list');
  cards.forEach(card => card.classList.remove('grid', 'cards', 'list'));
  list.classList.add(newStyle);
  cards.forEach(card => card.classList.add(newStyle));
}

buttonGrid.addEventListener('click', () => {
  changeStyle('grid');
  buttonGrid.classList.add('button-search-current');
  buttonCards.classList.remove('button-search-current');
  buttonList.classList.remove('button-search-current');
});

buttonCards.addEventListener('click', () => {
  changeStyle('cards');
  buttonCards.classList.add('button-search-current');
  buttonGrid.classList.remove('button-search-current');
  buttonList.classList.remove('button-search-current');
});

buttonList.addEventListener('click', () => {
  changeStyle('list');
  buttonList.classList.add('button-search-current');
  buttonGrid.classList.remove('button-search-current');
  buttonCards.classList.remove('button-search-current');
});
