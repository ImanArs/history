// Получаем элементы контейнера для ссылок на игры и традиции
const linksGames = document.querySelector('#links-games');
const linksTraditions = document.querySelector('#links-traditions');

// Извлекаем данные разделов из локального хранилища и преобразуем их в объект
// Если в локальном хранилище нет данных, используем пустой массив по умолчанию
let localLinks = JSON.parse(localStorage.getItem('sections')) ?? [];

/**
 * Эта функция вызывается при клике на ссылку.
 * Она находит раздел с данным ID, сохраняет его в локальном хранилище и перенаправляет пользователя на страницу с деталями.
 * @param {string} id - ID выбранного раздела
 */
function onDetailPage (id) {
  const selectedSection = localLinks.games.find(section => section.id === id);
  localStorage.setItem('selected_section', JSON.stringify(selectedSection));
  window.location.href='./details.html'
}

/**
 * Эта функция генерирует HTML для ссылок на игры и традиции и вставляет его на веб-страницу.
 * Она создает элемент <li> для каждого раздела, внутри которого находится элемент <a>, вызывающий функцию onDetailPage() при клике.
 */
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

// Вызываем функцию renderLinks() для генерации и вставки ссылок при загрузке скрипта
renderLinks()