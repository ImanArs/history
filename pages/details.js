const main = document.querySelector('#mainContent');

const localeSelectedSection = JSON.parse(localStorage.getItem('selected_section'));

const onMainPage = () => {
  window.location.href='../index.html'
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
    <iframe width="928" height="522" src="${localeSelectedSection.video}" title="Ат чабыш: кайкып учкан Каракыз - BBC Kyrgyz  #bbckyrgyz #атчабыш #күлүк #кочкор" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <button onclick="onMainPage()">вернуться</button>
  </section>
  `
}
pageContent()