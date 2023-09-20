function getTempItems() {
  const maxTemp = document.createElement('p');
  maxTemp.className = 'day-card-text max-temp';
  const minTemp = document.createElement('p');
  minTemp.className = 'day-card-text min-temp';
  const avgTemp = document.createElement('p');
  avgTemp.className = 'day-card-text avg-temp';

  return {
    maxTemp,
    minTemp,
    avgTemp,
  };
}

function getDayCardIcons() {
  const rainIcon = new Image();
  rainIcon.src = '../assets/imgs/rain.png';
  rainIcon.className = 'day-card-icon rain-icon';

  const thermometerIcon = new Image();
  thermometerIcon.src = '../assets/imgs/thermometer.png';
  thermometerIcon.className = 'day-card-icon thermometer-icon';

  const windIcon = new Image();
  windIcon.src = '../assets/imgs/wind.png';
  windIcon.className = 'day-card-icon wind-icon';

  const visIcon = new Image();
  visIcon.src = '../assets/imgs/eye.png';
  visIcon.className = 'day-card-icon visIcon';

  const snowIcon = new Image();
  snowIcon.src = '../assets/imgs/snow.png';
  snowIcon.className = 'day-card-icon snow-icon';

  const rainDropIcon = new Image();
  rainDropIcon.src = '../assets/imgs/raindrop.png';
  rainDropIcon.className = 'day-card-icon rain-drop-icon';

  return {
    rainIcon,
    thermometerIcon,
    windIcon,
    visIcon,
    snowIcon,
    rainDropIcon,
  };
}

function getHumidityItems() {
  const precipitation = document.createElement('p');
  precipitation.className = 'day-card-text precipitation';
  const humidity = document.createElement('p');
  humidity.className = 'day-card-text humidity';

  return {
    precipitation,
    humidity,
  };
}

export default function DayCard() {
  const dayCard = document.createElement('div');
  dayCard.className = 'day-card';

  const {
    rainIcon,
    thermometerIcon,
    windIcon,
    visIcon,
    snowIcon,
    rainDropIcon,
  } = getDayCardIcons();

  const {
    maxTemp,
    minTemp,
    avgTemp,
  } = getTempItems();

  const { precipitation, humidity } = getHumidityItems();

  const tempGrid = document.createElement('div');
  tempGrid.className = 'temp-grid';
  tempGrid.appendChild(thermometerIcon);
  tempGrid.appendChild(maxTemp);
  tempGrid.appendChild(avgTemp);
  tempGrid.appendChild(minTemp);

  const uv = document.createElement('p');
  uv.className = 'day-card-text uv-light';

  const windFlex = document.createElement('div');
  windFlex.className = 'wind-flex';
  const maxWind = document.createElement('p');
  maxWind.className = 'day-card-text max-wind';
  windFlex.appendChild(windIcon);
  windFlex.appendChild(maxWind);

  const visFlex = document.createElement('div');
  visFlex.className = 'vis-flex';
  const visibility = document.createElement('p');
  visibility.className = 'day-card-text visibility';
  visFlex.appendChild(visIcon);
  visFlex.appendChild(visibility);

  const humidityGrid = document.createElement('div');
  humidityGrid.className = 'humidity-grid';
  humidityGrid.appendChild(rainIcon);
  humidityGrid.appendChild(precipitation);
  humidityGrid.appendChild(humidity);

  const chanceFlex = document.createElement('div');
  chanceFlex.className = 'chance-flex';
  const snowContainer = document.createElement('div');
  snowContainer.className = 'snow-percentage-flex';
  const rainContainer = document.createElement('div');
  rainContainer.className = 'rain-percentage-flex';
  const percentageSnow = document.createElement('p');
  percentageSnow.className = 'day-card-text percent-snow';
  const percentageRain = document.createElement('p');
  percentageRain.className = 'day-card-text percent-rain';
  snowContainer.appendChild(snowIcon);
  snowContainer.appendChild(percentageSnow);
  rainContainer.appendChild(rainDropIcon);
  rainContainer.appendChild(percentageRain);
  chanceFlex.appendChild(rainContainer);
  chanceFlex.appendChild(snowContainer);

  dayCard.appendChild(tempGrid);
  dayCard.appendChild(uv);
  dayCard.appendChild(windFlex);
  dayCard.appendChild(visFlex);
  dayCard.appendChild(humidityGrid);
  dayCard.appendChild(chanceFlex);

  dayCard.addEventListener('dayCardResponse', (ev) => {
    const { day } = ev.detail.forecastDay;

    maxTemp.innerText = `Max: ${day.maxtemp_c}c`;
    minTemp.innerText = `Min: ${day.mintemp_c}c`;
    avgTemp.innerText = `Avg: ${day.avgtemp_c}c`;
    maxWind.innerText = `${day.maxwind_kph}kph`;
    visibility.innerText = `${day.avgvis_km}km`;
    precipitation.innerText = `Total: ${day.totalprecip_mm}mm`;
    humidity.innerText = `Humidity: ${day.avghumidity}`;
    percentageSnow.innerText = `${day.daily_chance_of_snow}%`;
    percentageRain.innerText = `${day.daily_chance_of_rain}%`;
    uv.innerText = `UV: ${day.uv}`;
  });

  return dayCard;
}
