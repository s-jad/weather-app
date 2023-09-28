import thermometerPng from '../assets/imgs/thermometer.png';
import rainDropPng from '../assets/imgs/raindrop.png';
import windPng from '../assets/imgs/wind.png';
import snowPng from '../assets/imgs/snow.png';
import uvPng from '../assets/imgs/uv.png';
import eyePng from '../assets/imgs/eye.png';
import pressurePng from '../assets/imgs/pressure.png';
import { state } from './timeline';

function getTempItems() {
  const maxTempFlex = document.createElement('div');
  maxTempFlex.className = 'max-temp-flex';
  const minTempFlex = document.createElement('div');
  minTempFlex.className = 'min-temp-flex';
  const avgTempFlex = document.createElement('div');
  avgTempFlex.className = 'avg-temp-flex';

  const maxLabel = document.createElement('p');
  maxLabel.className = 'max-label';
  maxLabel.innerText = 'Max: ';
  const minLabel = document.createElement('p');
  minLabel.className = 'min-label';
  minLabel.innerText = 'Min: ';
  const avgLabel = document.createElement('p');
  avgLabel.className = 'avg-label';
  avgLabel.innerText = 'Avg: ';

  const maxTemp = document.createElement('p');
  maxTemp.className = 'day-card-text max-temp';
  const minTemp = document.createElement('p');
  minTemp.className = 'day-card-text min-temp';
  const avgTemp = document.createElement('p');
  avgTemp.className = 'day-card-text avg-temp';

  maxTempFlex.appendChild(maxLabel);
  maxTempFlex.appendChild(maxTemp);
  minTempFlex.appendChild(minLabel);
  minTempFlex.appendChild(minTemp);
  avgTempFlex.appendChild(avgLabel);
  avgTempFlex.appendChild(avgTemp);

  return {
    maxTemp,
    minTemp,
    avgTemp,
    maxTempFlex,
    minTempFlex,
    avgTempFlex,
  };
}

function getUpperIcons() {
  const thermometerIcon = new Image();
  thermometerIcon.src = thermometerPng;
  thermometerIcon.className = 'day-card-icon thermometer-icon';
  thermometerIcon.alt = 'Thermometer';

  const rainDropIcon = new Image();
  rainDropIcon.src = rainDropPng;
  rainDropIcon.className = 'day-card-icon rain-drop-icon';
  rainDropIcon.alt = 'Raindrop';

  const windIcon = new Image();
  windIcon.src = windPng;
  windIcon.className = 'day-card-icon wind-icon';
  windIcon.alt = 'A gust of wind';

  return {
    thermometerIcon,
    rainDropIcon,
    windIcon,
  };
}

function getLowerFlexIcons() {
  const visIcon = new Image();
  visIcon.src = eyePng;
  visIcon.className = 'day-card-icon visIcon';
  visIcon.alt = 'Eye';

  const snowIcon = new Image();
  snowIcon.src = snowPng;
  snowIcon.className = 'day-card-icon snow-icon';
  snowIcon.alt = 'Snowflake';

  const uvIcon = new Image();
  uvIcon.src = uvPng;
  uvIcon.className = 'day-card-icon uv-icon';
  uvIcon.alt = 'Sunglasses';

  const pressureIcon = new Image();
  pressureIcon.src = pressurePng;
  pressureIcon.className = 'day-card-icon pressure-icon';
  pressureIcon.alt = 'Pressure gauge';

  return {
    visIcon,
    snowIcon,
    uvIcon,
    pressureIcon,
  };
}

function getHumidityItems() {
  const precipitation = document.createElement('p');
  precipitation.className = 'day-card-text precipitation';
  const humidity = document.createElement('p');
  humidity.className = 'day-card-text humidity';
  const percentageRain = document.createElement('p');
  percentageRain.className = 'day-card-text percent-rain';

  return {
    precipitation,
    humidity,
    percentageRain,
  };
}

function getWindItems() {
  const maxWind = document.createElement('p');
  maxWind.className = 'day-card-text max-wind';
  const maxGust = document.createElement('p');
  maxGust.className = 'day-card-text max-wind-gust';
  const windDirection = document.createElement('p');
  windDirection.className = 'day-card-text w-direction';

  return {
    maxWind,
    maxGust,
    windDirection,
  };
}

function getLowerFlex() {
  const {
    visIcon,
    snowIcon,
    uvIcon,
    pressureIcon,
  } = getLowerFlexIcons();

  const uvFlex = document.createElement('div');
  uvFlex.className = 'uv-flex';
  const uv = document.createElement('p');
  uv.className = 'day-card-text uv-light';
  uvFlex.appendChild(uvIcon);
  uvFlex.appendChild(uv);

  const pressureFlex = document.createElement('div');
  pressureFlex.className = 'pressure-flex';
  const pressure = document.createElement('p');
  pressure.className = 'day-card-text pressure';
  pressureFlex.appendChild(pressureIcon);
  pressureFlex.appendChild(pressure);

  const visFlex = document.createElement('div');
  visFlex.className = 'vis-flex';
  const visibility = document.createElement('p');
  visibility.className = 'day-card-text visibility';
  visFlex.appendChild(visIcon);
  visFlex.appendChild(visibility);

  const lowerFlex = document.createElement('div');
  lowerFlex.className = 'lower-flex';
  const snowFlex = document.createElement('div');
  snowFlex.className = 'snow-percentage-flex';
  const percentageSnow = document.createElement('p');
  percentageSnow.className = 'day-card-text percent-snow';

  snowFlex.appendChild(snowIcon);
  snowFlex.appendChild(percentageSnow);

  lowerFlex.appendChild(snowFlex);
  lowerFlex.appendChild(visFlex);
  lowerFlex.appendChild(uvFlex);
  lowerFlex.appendChild(pressureFlex);

  return lowerFlex;
}

export default function DayCard() {
  const dayCard = document.createElement('div');
  dayCard.className = 'day-card';

  const {
    thermometerIcon,
    rainDropIcon,
    windIcon,
  } = getUpperIcons();

  const {
    maxTemp,
    minTemp,
    avgTemp,
    maxTempFlex,
    minTempFlex,
    avgTempFlex,
  } = getTempItems();

  const {
    precipitation,
    humidity,
    percentageRain,
  } = getHumidityItems();

  const {
    maxWind,
    maxGust,
    windDirection,
  } = getWindItems();

  const tempGrid = document.createElement('div');
  tempGrid.className = 'temp-grid';
  tempGrid.appendChild(thermometerIcon);
  tempGrid.appendChild(maxTempFlex);
  tempGrid.appendChild(avgTempFlex);
  tempGrid.appendChild(minTempFlex);

  const humidityGrid = document.createElement('div');
  humidityGrid.className = 'humidity-grid';
  humidityGrid.appendChild(rainDropIcon);
  humidityGrid.appendChild(percentageRain);
  humidityGrid.appendChild(precipitation);
  humidityGrid.appendChild(humidity);

  const windGrid = document.createElement('div');
  windGrid.className = 'wind-grid';
  windGrid.appendChild(windIcon);
  windGrid.appendChild(maxWind);
  windGrid.appendChild(maxGust);
  windGrid.appendChild(windDirection);

  const upperFlex = document.createElement('div');
  upperFlex.className = 'upper-flex';
  upperFlex.appendChild(tempGrid);
  upperFlex.appendChild(humidityGrid);
  upperFlex.appendChild(windGrid);
  dayCard.appendChild(upperFlex);
  dayCard.appendChild(getLowerFlex());

  const percentageSnow = dayCard.querySelector('.percent-snow');
  const visibility = dayCard.querySelector('.visibility');
  const uv = dayCard.querySelector('.uv-light');
  const pressure = dayCard.querySelector('.pressure');

  dayCard.addEventListener('dayCardResponse', (ev) => {
    const { day } = ev.detail.forecastDay;
    const { current } = ev.detail;
    if (state.currentMeasurementSystem === 'metric') {
      maxTemp.innerText = `${day.maxtemp_c}°C`;
      minTemp.innerText = `${day.mintemp_c}°C`;
      avgTemp.innerText = `${day.avgtemp_c}°C`;
      maxWind.innerText = `${day.maxwind_kph}kph`;
      maxGust.innerText = `${current.gust_kph}kph`;
      windDirection.innerText = `${current.wind_dir}`;
      precipitation.innerText = `${day.totalprecip_mm}mm`;
      visibility.innerText = `${day.avgvis_km}km`;
    } else if (state.currentMeasurementSystem === 'imperial') {
      maxTemp.innerText = `${day.maxtemp_f}°F`;
      minTemp.innerText = `${day.mintemp_f}°F`;
      avgTemp.innerText = `${day.avgtemp_f}°F`;
      maxWind.innerText = `${day.maxwind_mph}mph`;
      maxGust.innerText = `${current.gust_mph}mph`;
      windDirection.innerText = `${current.wind_dir}`;
      precipitation.innerText = `${day.totalprecip_in}inches`;
      visibility.innerText = `${day.avgvis_miles}miles`;
    }
    humidity.innerText = `Hum: ${day.avghumidity}%`;
    percentageRain.innerText = `${day.daily_chance_of_rain}%`;
    percentageSnow.innerText = `${day.daily_chance_of_snow}%`;
    uv.innerText = `${day.uv}`;
    pressure.innerText = `${current.pressure_mb}mb`;
  });

  dayCard.addEventListener('dayTwoVisible', (ev) => {
    const { day } = ev.detail;

    if (state.currentMeasurementSystem === 'metric') {
      maxTemp.innerText = `${day.maxtemp_c}°C`;
      minTemp.innerText = `${day.mintemp_c}°C`;
      avgTemp.innerText = `${day.avgtemp_c}°C`;
      maxWind.innerText = `${day.maxwind_kph}kph`;
      precipitation.innerText = `${day.totalprecip_mm}mm`;
      visibility.innerText = `${day.avgvis_km}km`;
    } else if (state.currentMeasurementSystem === 'imperial') {
      maxTemp.innerText = `${day.maxtemp_f}°F`;
      minTemp.innerText = `${day.mintemp_f}°F`;
      avgTemp.innerText = `${day.avgtemp_f}°F`;
      maxWind.innerText = `${day.maxwind_mph}mph`;
      precipitation.innerText = `${day.totalprecip_in}inches`;
      visibility.innerText = `${day.avgvis_miles}miles`;
    }

    humidity.innerText = `Hum: ${day.avghumidity}%`;
    percentageRain.innerText = `${day.daily_chance_of_rain}%`;
    percentageSnow.innerText = `${day.daily_chance_of_snow}%`;
    uv.innerText = `${day.uv}`;
  });

  dayCard.addEventListener('dayTwoRight', (ev) => {
    const { day } = ev.detail;

    if (state.currentMeasurementSystem === 'metric') {
      maxTemp.innerText = `${day.maxtemp_c}°C`;
      minTemp.innerText = `${day.mintemp_c}°C`;
      avgTemp.innerText = `${day.avgtemp_c}°C`;
      maxWind.innerText = `${day.maxwind_kph}kph`;
      precipitation.innerText = `${day.totalprecip_mm}mm`;
      visibility.innerText = `${day.avgvis_km}km`;
    } else if (state.currentMeasurementSystem === 'imperial') {
      maxTemp.innerText = `${day.maxtemp_f}°F`;
      minTemp.innerText = `${day.mintemp_f}°F`;
      avgTemp.innerText = `${day.avgtemp_f}°F`;
      maxWind.innerText = `${day.maxwind_mph}mph`;
      precipitation.innerText = `${day.totalprecip_in}inches`;
      visibility.innerText = `${day.avgvis_miles}miles`;
    }

    humidity.innerText = `Hum: ${day.avghumidity}%`;
    percentageRain.innerText = `${day.daily_chance_of_rain}%`;
    percentageSnow.innerText = `${day.daily_chance_of_snow}%`;
    uv.innerText = `${day.uv}`;
  });

  dayCard.addEventListener('dayThreeVisible', (ev) => {
    const { day } = ev.detail;

    if (state.currentMeasurementSystem === 'metric') {
      maxTemp.innerText = `${day.maxtemp_c}°C`;
      minTemp.innerText = `${day.mintemp_c}°C`;
      avgTemp.innerText = `${day.avgtemp_c}°C`;
      maxWind.innerText = `${day.maxwind_kph}kph`;
      precipitation.innerText = `${day.totalprecip_mm}mm`;
      visibility.innerText = `${day.avgvis_km}km`;
    } else if (state.currentMeasurementSystem === 'imperial') {
      maxTemp.innerText = `${day.maxtemp_f}°F`;
      minTemp.innerText = `${day.mintemp_f}°F`;
      avgTemp.innerText = `${day.avgtemp_f}°F`;
      maxWind.innerText = `${day.maxwind_mph}mph`;
      precipitation.innerText = `${day.totalprecip_in}inches`;
      visibility.innerText = `${day.avgvis_miles}miles`;
    }

    humidity.innerText = `Hum: ${day.avghumidity}%`;
    percentageRain.innerText = `${day.daily_chance_of_rain}%`;
    percentageSnow.innerText = `${day.daily_chance_of_snow}%`;
    uv.innerText = `${day.uv}`;
  });

  dayCard.addEventListener('dayThreeRight', (ev) => {
    const { day } = ev.detail;

    if (state.currentMeasurementSystem === 'metric') {
      maxTemp.innerText = `${day.maxtemp_c}°C`;
      minTemp.innerText = `${day.mintemp_c}°C`;
      avgTemp.innerText = `${day.avgtemp_c}°C`;
      maxWind.innerText = `${day.maxwind_kph}kph`;
      precipitation.innerText = `${day.totalprecip_mm}mm`;
      visibility.innerText = `${day.avgvis_km}km`;
    } else if (state.currentMeasurementSystem === 'imperial') {
      maxTemp.innerText = `${day.maxtemp_f}°F`;
      minTemp.innerText = `${day.mintemp_f}°F`;
      avgTemp.innerText = `${day.avgtemp_f}°F`;
      maxWind.innerText = `${day.maxwind_mph}mph`;
      precipitation.innerText = `${day.totalprecip_in}inches`;
      visibility.innerText = `${day.avgvis_miles}miles`;
    }

    humidity.innerText = `Hum: ${day.avghumidity}%`;
    percentageRain.innerText = `${day.daily_chance_of_rain}%`;
    percentageSnow.innerText = `${day.daily_chance_of_snow}%`;
    uv.innerText = `${day.uv}`;
  });
  return dayCard;
}
