import SearchBar from "./searchbar";

function getLogo() {
  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';
  logoContainer.innerText = 'logo';

  return logoContainer;
}

function currentCity() {
  const currentCityContainer = document.createElement('div');
  currentCityContainer.className = 'current-city-container';
  currentCityContainer.innerText = 'Current city';

  return currentCityContainer;
}


export default function Header() {
  const header = document.createElement('header');
  header.className = 'site-header';

  header.appendChild(currentCity());
  header.appendChild(getLogo());
  header.appendChild(SearchBar());

  return header;
}
