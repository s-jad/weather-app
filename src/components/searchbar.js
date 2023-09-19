import { getCityWeatherData, updateCityWeatherData } from './api_interface';
import { updateCurrentCity, updateCurrentCondition } from './display';

export default function SearchBar() {
  const search = document.createElement('input');
  search.className = 'search-weather';
  search.type = 'text';

  search.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter') {
      const newWeatherData = getCityWeatherData(search.value.trim());
      updateCityWeatherData(newWeatherData);
    }
  });
  return search;
}
