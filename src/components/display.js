import { currentCityData } from './api_interface';

function updateCurrentCity() {
  const currentCityDisplay = document.body.querySelector('.current-city-container');

  const cityName = currentCityDisplay.querySelector('.city-name');
  const region = currentCityDisplay.querySelector('.region');
  const country = currentCityDisplay.querySelector('.country');
  const latLon = currentCityDisplay.querySelector('.latitude-longitude');
  const localTime = currentCityDisplay.querySelector('.local-time');

  cityName.innerText = currentCityData.city.name;
  region.innerText = currentCityData.city.region;
  country.innerText = currentCityData.city.country;
  latLon.innerText = `Latitude: ${currentCityData.city.lat}, Longitude: ${currentCityData.city.lon}`;
  localTime.innerText = currentCityData.city.localtime;
}

function updateCurrentCondition() {
  const currentConditionDisplay = document.body.querySelector('.current-condition-container');

  const currentWeatherIcon = currentConditionDisplay.querySelector('.current-condition-icon');
  const currentWeatherText = currentConditionDisplay.querySelector('.current-condition-text');
  console.log(currentWeatherText);
  console.log(currentWeatherIcon);

  currentWeatherIcon.src = currentCityData.condition.icon;
  currentWeatherText.innerText = currentCityData.condition.text;
}

export {
  updateCurrentCity,
  updateCurrentCondition,
};
