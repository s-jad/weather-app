import SearchBar from './searchbar';

function currentCondition(header) {
  const currentIcon = new Image();
  currentIcon.className = 'current-condition-icon';

  const currentText = document.createElement('h3');
  currentText.className = 'current-condition-text';

  header.addEventListener('currentConditionApiResponse', (ev) => {
    const { condition } = ev.detail;

    currentIcon.src = `https:${condition.icon}`;
    currentText.innerText = condition.text;
  });

  const currentConditionContainer = document.createElement('div');
  currentConditionContainer.className = 'condition-flex';
  currentConditionContainer.appendChild(currentIcon);
  currentConditionContainer.appendChild(currentText);
  return currentConditionContainer;
}

function currentCity(header) {
  const cityName = document.createElement('h1');
  cityName.className = 'current-city city-name';
  const country = document.createElement('h2');
  country.className = 'current-city country';
  const latLon = document.createElement('h3');
  latLon.className = 'current-city latitude-longitude';
  const localTime = document.createElement('h3');
  localTime.className = 'current-city local-time';

  header.addEventListener('currentCityApiResponse', (ev) => {
    const { location } = ev.detail;

    cityName.innerText = location.name;
    country.innerText = `${location.country}`;
    latLon.innerText = `${location.lat}, ${location.lon}`;
    localTime.innerText = `${location.localtime}`;
  });

  return {
    cityName,
    country,
    latLon,
    localTime,
  };
}

export default function Header() {
  const header = document.createElement('header');
  header.className = 'site-header';

  const cityData = currentCity(header);

  Object.keys(cityData).forEach((key) => {
    header.appendChild(cityData[key]);
  });

  header.appendChild(SearchBar());
  const conditionFlex = currentCondition(header);
  header.appendChild(conditionFlex);

  return header;
}
