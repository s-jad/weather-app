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
  maxGust.className = 'day-card-text max-gust';
  const windDirection = document.createElement('p');
  windDirection.className = 'day-card-text wind-direction';

  return {
    maxWind,
    maxGust,
    windDirection,
  };
}

export default function DayCard() {
  const dayCard = document.createElement('div');
  dayCard.className = 'day-card';

  const {
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
  tempGrid.appendChild(maxTemp);
  tempGrid.appendChild(avgTemp);
  tempGrid.appendChild(minTemp);

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

  const uv = document.createElement('p');
  uv.className = 'day-card-text uv-light';
  uv.innerText = 'UV:';
  const pressure = document.createElement('p');
  pressure.className = 'day-card-text pressure';
  pressure.innerText = 'Pressure:';

  const visFlex = document.createElement('div');
  visFlex.className = 'vis-flex';
  const visibility = document.createElement('p');
  visibility.className = 'day-card-text visibility';
  visFlex.appendChild(visIcon);
  visFlex.appendChild(visibility);

  const lowerFlex = document.createElement('div');
  lowerFlex.className = 'lower-flex';
  const snowContainer = document.createElement('div');
  snowContainer.className = 'snow-percentage-flex';
  const percentageSnow = document.createElement('p');
  percentageSnow.className = 'day-card-text percent-snow';

  snowContainer.appendChild(snowIcon);
  snowContainer.appendChild(percentageSnow);

  lowerFlex.appendChild(snowContainer);
  lowerFlex.appendChild(visFlex);
  lowerFlex.appendChild(uv);
  lowerFlex.appendChild(pressure);

  dayCard.appendChild(tempGrid);
  dayCard.appendChild(humidityGrid);
  dayCard.appendChild(windGrid);
  dayCard.appendChild(lowerFlex);

  dayCard.addEventListener('dayCardResponse', (ev) => {
    const { day } = ev.detail.forecastDay;
    const { current } = ev.detail;

    maxTemp.innerText = `Max: ${day.maxtemp_c}c`;
    minTemp.innerText = `Min: ${day.mintemp_c}c`;
    avgTemp.innerText = `Avg: ${day.avgtemp_c}c`;
    maxWind.innerText = `${day.maxwind_kph}kph`;
    maxGust.innerText = `${current.gust_kph}kph`;
    windDirection.innerText = `${current.wind_dir}`;
    precipitation.innerText = `Tot: ${day.totalprecip_mm}mm`;
    humidity.innerText = `Hum: ${day.avghumidity}%`;
    percentageRain.innerText = `Chance: ${day.daily_chance_of_rain}%`;
    percentageSnow.innerText = `${day.daily_chance_of_snow}%`;
    visibility.innerText = `${day.avgvis_km}km`;
    uv.innerText = `UV: ${day.uv}`;
    pressure.innerText = `Pressure: ${current.pressure_mb}mb`;
  });

  return dayCard;
}
