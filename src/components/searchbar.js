import { getCityWeatherData } from './api_interface';

export default function SearchBar() {
  const search = document.createElement('input');
  search.className = 'search-weather';
  search.type = 'text';

  search.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter') {
      getCityWeatherData(search.value.trim());
    }
  });

  return search;
}
