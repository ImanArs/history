/**
 * Этот скрипт JavaScript отвечает за отображение разделов "Игры" и "Традиции" на веб-странице.
 * Он извлекает данные разделов из локального хранилища, генерирует HTML для каждого раздела и вставляет его на веб-страницу.
 */

// Получаем элементы контейнера для разделов игр и традиций
const sectionGames = document.querySelector('#section-games');
const sectionTraditions = document.querySelector('#section-traditions');

// Извлекаем данные разделов из локального хранилища и преобразуем их в объект
// Если в локальном хранилище нет данных, используем пустой массив по умолчанию
let localSections = JSON.parse(localStorage.getItem('sections')) ?? [];

/**
 * Функция card генерирует HTML для карточки раздела.
 * @param {Object} obj - объект раздела
 * @returns {string} HTML-строка карточки раздела
 */
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

/**
 * Функция onNextPage вызывается при клике на карточку раздела.
 * Она находит раздел с данным ID, сохраняет его в локальном хранилище и перенаправляет пользователя на страницу с деталями.
 * @param {string} id - ID выбранного раздела
 */
function onNextPage (id) {
  const selectedSection = localSections.games.find(section => section.id === id) ?? localSections.traditions.find(section => section.id === id);
  localStorage.setItem('selected_section', JSON.stringify(selectedSection));
  window.location.href='./details.html'
}

/**
 * Функция renderSections генерирует HTML для разделов игр и традиций и вставляет его на веб-страницу.
 */
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

// Вызываем функцию renderSections() для генерации и вставки разделов при загрузке скрипта
renderSections()