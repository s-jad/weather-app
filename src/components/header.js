import SearchBar from "./searchbar";

function currentCondition() {
  const currentConditionContainer = document.createElement('div');
  currentConditionContainer.className = 'current-condition-container';

  currentConditionContainer.innerHTML = `
    <img class="current-condition-icon" src="#" alt="Current weather icon">
    <h2 class="current-condition-text"></h2>
  `;

  const currentConditionIcon = currentConditionContainer.querySelector('.current-condition-icon');
  const currentConditionText = currentConditionContainer.querySelector('.current-condition-text');

  currentConditionContainer.addEventListener('currentConditionApiResponse', (ev) => {
    console.log("ev => ", ev);
    const condition = ev.detail.condition;

    currentConditionIcon.src = `https:${condition.icon}`;
    currentConditionText.innerText = condition.text;
  });

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

  const cityName = currentCityContainer.querySelector('.city-name');
  const region = currentCityContainer.querySelector('.region');
  const country = currentCityContainer.querySelector('.country');
  const latLon = currentCityContainer.querySelector('.latitude-longitude');
  const localTime = currentCityContainer.querySelector('.local-time');

  currentCityContainer.addEventListener('currentCityApiResponse', (ev) => {
    console.log("ev => ", ev);
    const cityDetails = ev.detail.location;
    cityName.innerText = cityDetails.name;
    region.innerText = cityDetails.region;
    country.innerText = cityDetails.country;
    latLon.innerText = `${cityDetails.lat}, ${cityDetails.lon}`;
    localTime.innerText = `Local time: ${cityDetails.localtime}`;
  });

  return currentCityContainer;
}

export default function Header() {
  const header = document.createElement('header');
  header.className = 'site-header';
  const cityCondition = document.createElement('div');
  cityCondition.className = "city-condition-container";

  cityCondition.appendChild(currentCity());
  cityCondition.appendChild(currentCondition());
  header.appendChild(cityCondition);
  header.appendChild(SearchBar());

  return header;
}
