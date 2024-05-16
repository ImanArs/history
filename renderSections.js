const sectionGames = document.querySelector('#section-games');
const sectionTraditions = document.querySelector('#section-traditions');

let localSections = JSON.parse(localStorage.getItem('sections')) ?? [];

const card = (obj) => {
  return `
  <div class="section" onclick="onNextPage(${obj.id})">
    <img src="${obj.image}" alt="">
    <div>
      <h2>${obj.title}</h2>
      <p>${obj.description}</p>
    </div>
    <button>go</button>
  </div>
  `
}

function onNextPage (id) {
  const selectedSection = localSections.games.find(section => section.id === id) ?? localSections.traditions.find(section => section.id === id);
  localStorage.setItem('selected_section', JSON.stringify(selectedSection));
  window.location.href='./details.html'
}

const renderSections = () => {
  let htmlGames = '';
  localSections.games.forEach(section => {
    htmlGames += card(section);
  });
  sectionGames.innerHTML = htmlGames;
  let htmlTraditions = '';
  localSections.traditions.forEach(section => {
    htmlTraditions += card(section);
  });
  sectionTraditions.innerHTML = htmlTraditions;
}
renderSections()