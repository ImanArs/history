const main = document.querySelector('#mainContent');

const localeSelectedSection = JSON.parse(localStorage.getItem('selected_section'));

const onMainPage = () => {
  window.location.href='./index.html'
}

const pageContent = () => {
  main.innerHTML =`
  <section class="banner">
    <img src="${localeSelectedSection.image}" alt="">
  </section>
  <section class="section">
    <h2>${localeSelectedSection.title}</h2>
    <div>
      <h3>Описание</h3>
      <p>${localeSelectedSection.description}</p>
    </div>
    <div>
      <h3>Правила</h3>
      <p>${localeSelectedSection.rules}</p>
    </div>
    <div>
      <h3>История</h3>
      <p>${localeSelectedSection.history}</p>
    </div>
    ${localeSelectedSection.video}
    <button onclick="onMainPage()">вернуться</button>
  </section>
  `
}
pageContent()