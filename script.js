// Открытие/закрытие модального окна
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal-container");
  const openButton = document.querySelector(".appointment-button");
  const closeButton = document.querySelector(".modal-close-button");

  if (openButton && modal && closeButton) {
    openButton.addEventListener("click", function () {
      modal.classList.remove("modal-container-close");
    });

    closeButton.addEventListener("click", function () {
      modal.classList.add("modal-container-close");
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.add("modal-container-close");
      }
    });
  }
});

// Скрипт на календарь
const months = [
  "января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

document.querySelectorAll(".search-date-container").forEach(container => {
  const dateInput = container.querySelector(".hotel-search-field");
  const textInput = container.querySelector(".search-date-value");

  dateInput.addEventListener("change", function () {
    if (this.value) {
      const date = new Date(this.value);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      textInput.value = `${day} ${month} ${year}`;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".search-date-container").forEach(container => {
    const textInput = container.querySelector(".search-date-value");

    textInput.addEventListener("focus", () => {
      container.classList.add("focused");
    });

    textInput.addEventListener("blur", () => {
      container.classList.remove("focused");
    });
  });
});

//Скрипт на сетку товаров на странице гостиниц
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

buttonGrid.addEventListener('click', (event) => {
  event.preventDefault();
  changeStyle('grid');
  buttonGrid.classList.add('button-search-current');
  buttonCards.classList.remove('button-search-current');
  buttonList.classList.remove('button-search-current');
});

buttonCards.addEventListener('click', (event) => {
  event.preventDefault();
  changeStyle('cards');
  buttonCards.classList.add('button-search-current');
  buttonGrid.classList.remove('button-search-current');
  buttonList.classList.remove('button-search-current');
});

buttonList.addEventListener('click', (event) => {
  event.preventDefault();
  changeStyle('list');
  buttonList.classList.add('button-search-current');
  buttonGrid.classList.remove('button-search-current');
  buttonCards.classList.remove('button-search-current');
});

/* переполнение
function getTextNodesIn(elem, opt_fnFilter) {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i],
        nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          if (node.data.trim() !== '') {
            textNodes.push(node.data.trim() !== '' ? node : '');

          }
        }
      } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

getTextNodesIn(document.body).forEach((item) => { item.textContent = "У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон." })
*/
