import SearchBar from "./searchbar";

function currentCondition() {
  const currentConditionContainer = document.createElement('div');
  currentConditionContainer.className = 'current-condition-container';

  currentConditionContainer.innerHTML = `
    <img class="current-condition-icon" src="#" alt="Current weather icon">
    <h2 class="current-condition-text"></h2>
  `;

  return currentConditionContainer;
}

function currentCity() {
  const currentCityContainer = document.createElement('div');
  currentCityContainer.className = 'current-city-container';

  currentCityContainer.innerHTML = `
    <h1 class="current-city city-name"></h1>
    <h2 class="current-city region"></h2>
    <p class="current-city country"></p>
    <p class="current-city latitude-longitude"></p>
    <p class="current-city local-time"></p>
  `;


  return currentCityContainer;
}


export default function Header() {
  const header = document.createElement('header');
  header.className = 'site-header';

  header.appendChild(currentCity());
  header.appendChild(currentCondition());
  header.appendChild(SearchBar());

  return header;
}
