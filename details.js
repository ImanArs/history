/**
 * Этот скрипт JavaScript отвечает за отображение деталей выбранного раздела на веб-странице.
 * Он извлекает данные выбранного раздела из локального хранилища, генерирует HTML для деталей раздела и вставляет его на веб-страницу.
 */

// Получаем элемент основного контента
const main = document.querySelector('#mainContent');

// Извлекаем данные выбранного раздела из локального хранилища
const localeSelectedSection = JSON.parse(localStorage.getItem('selected_section'));

/**
 * Функция onMainPage перенаправляет пользователя на главную страницу.
 */
const onMainPage = () => {
  window.location.href='./index.html'
}

/**
 * Функция pageContent генерирует HTML для деталей выбранного раздела и вставляет его на веб-страницу.
 */
const language = localStorage.getItem('language') ?? 'ru';
const translations = {
  ru: {
    description: 'Описание',
    rules: 'Правила',
    history: 'История',
    back: 'вернуться'
  },
  en: {
    description: 'Description',
    rules: 'Rules',
    history: 'History',
    back: 'Back'
  },
  kg: {
    description: 'Сүрөттөмө',
    rules: 'Эрежелер',
    history: 'Тарых',
    back: 'Кайра'
  }
}
const pageContent = () => {
  main.innerHTML =`
  <section class="banner">
    <img src="${localeSelectedSection.image}" alt="">
  </section>
  <section class="section">
    <h2>${localeSelectedSection.title}</h2>
    <div>
      <h3>
        ${translations[language].description}
      </h3>
      <p>${localeSelectedSection.description}</p>
    </div>
    <div>
      <h3>
        ${translations[language].rules}
      </h3>
      <p>${localeSelectedSection.rules}</p>
    </div>
    <div>
      <h3>
        ${translations[language].history}
      </h3>
      <p>${localeSelectedSection.history}</p>
    </div>
    ${localeSelectedSection.video}
    <button onclick="onMainPage()">${translations[language].back}</button>
  </section>
  `
}

// Вызываем функцию pageContent() для генерации и вставки деталей раздела при загрузке скрипта
pageContent()