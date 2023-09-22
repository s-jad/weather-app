import SearchBar from './searchbar';

function currentConditionIcon() {
  const currentIcon = new Image();
  currentIcon.className = 'current-condition-icon';

  const currentText = document.createElement('h3');
  currentText.className = 'current-condition-text';

  return {
    currentIcon,
    currentText,
  };
}

function currentCity(header) {
  const cityName = document.createElement('h1');
  cityName.className = 'current-city city-name';
  const country = document.createElement('h2');
  country.className = 'current-city country';
  const latLon = document.createElement('h3');
  latLon.className = 'current-city latitude-longitude';
  const localTime = document.createElement('h1');
  localTime.className = 'current-city local-time';
  const localDate = document.createElement('h2');
  localDate.className = 'current-city local-date';

  header.addEventListener('currentCityApiResponse', (ev) => {
    const { location } = ev.detail;

    cityName.innerText = location.name;
    country.innerText = `${location.country}`;
    latLon.innerText = `${location.lat}, ${location.lon}`;
    const time = location.localtime.split(' ');

    localTime.innerText = `${time[1]}`;
    localDate.innerText = `${time[0]}`;
  });

  return {
    cityName,
    country,
    latLon,
    localTime,
    localDate,
  };
}

export default function Header() {
  const header = document.createElement('header');
  header.className = 'site-header';

  const cityData = currentCity(header);

  Object.keys(cityData).forEach((key) => {
    header.appendChild(cityData[key]);
  });

  const { currentIcon, currentText } = currentConditionIcon();

  const conditionFlex = document.createElement('div');
  conditionFlex.className = 'condition-flex';
  conditionFlex.appendChild(currentIcon);
  conditionFlex.appendChild(currentText);

  header.appendChild(SearchBar());
  header.appendChild(conditionFlex);

  header.addEventListener('currentConditionApiResponse', (ev) => {
    const { current } = ev.detail;

    currentIcon.src = `https:${current.condition.icon}`;
    currentText.innerText = current.condition.text;
  });

  return header;
}
