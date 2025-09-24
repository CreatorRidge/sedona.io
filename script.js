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
