const linksGames = document.querySelector('#links-games');
const linksTraditions = document.querySelector('#links-traditions');

let localLinks = JSON.parse(localStorage.getItem('sections')) ?? [];

function onDetailPage (id) {
  const selectedSection = localLinks.games.find(section => section.id === id);
  localStorage.setItem('selected_section', JSON.stringify(selectedSection));
  window.location.href='./details.html'
}

const renderLinks = () => {
  let linkGames = '';
  localLinks.games.forEach(link => {
    linkGames += `<li><a onclick="onDetailPage(${link.id})" class="link">${link.title}</a></li>`;
  });
  linksGames.innerHTML = linkGames;

  let linkTraditions = '';
  localLinks.traditions.forEach(link => {
    linkTraditions += `<li><a onclick="onDetailPage(${link.id})" class="link">${link.title}</a></li>`;
  });
  linksTraditions.innerHTML = linkTraditions;
}
renderLinks()