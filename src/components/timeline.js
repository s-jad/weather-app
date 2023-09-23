const state = {
  currentTimeline: 0,
  timelines: [],
};

function getConditions(hour) {
  const infoContainer = document.createElement('div');
  infoContainer.className = 'timeline-hour-info-container';
  const hourlyConditionIcon = new Image();
  hourlyConditionIcon.className = `hourly-condition-icon hci-${hour}`;
  const hourlyConditionText = document.createElement('p');
  hourlyConditionText.className = `hourly-condition-text hct-${hour}`;

  infoContainer.appendChild(hourlyConditionIcon);
  infoContainer.appendChild(hourlyConditionText);

  return infoContainer;
}

function getTemps(hour) {
  const infoContainer = document.createElement('div');
  infoContainer.className = 'timeline-hour-info-container';
  const hourlyTemp = document.createElement('p');
  hourlyTemp.className = `hourly-temp h-temp-${hour}`;
  const hourlyFeelsLike = document.createElement('p');
  hourlyFeelsLike.className = `hourly-feels-like h-fl-${hour}`;
  const hourlyWindChill = document.createElement('p');
  hourlyWindChill.className = `hourly-wind-chill h-wc-${hour}`;
  infoContainer.appendChild(hourlyTemp);
  infoContainer.appendChild(hourlyFeelsLike);
  infoContainer.appendChild(hourlyWindChill);

  return infoContainer;
}

function getWind(hour) {
  const infoContainer = document.createElement('div');
  infoContainer.className = 'timeline-hour-info-container';
  const hourlyWindKph = document.createElement('p');
  hourlyWindKph.className = `hourly-wind-kph h-wind-${hour}`;
  const hourlyGustKph = document.createElement('p');
  hourlyGustKph.className = `hourly-gust-kph h-gust-${hour}`;
  const hourlyWindDirection = document.createElement('p');
  hourlyWindDirection.className = `hourly-wind-dir h-wind-dir-${hour}`;
  infoContainer.appendChild(hourlyWindKph);
  infoContainer.appendChild(hourlyGustKph);
  infoContainer.appendChild(hourlyWindDirection);

  return infoContainer;
}

function getPrecipitation(hour) {
  const infoContainer = document.createElement('div');
  infoContainer.className = 'timeline-hour-info-container';
  const hourlyRainChance = document.createElement('p');
  hourlyRainChance.className = `hourly-rain-chance h-rain-${hour}`;
  const hourlyCloudCover = document.createElement('p');
  hourlyCloudCover.className = `hourly-cloud-cover h-cloud-${hour}`;
  const hourlyHumidity = document.createElement('p');
  hourlyHumidity.className = `hourly-humidity h-humidity-${hour}`;
  infoContainer.appendChild(hourlyRainChance);
  infoContainer.appendChild(hourlyCloudCover);
  infoContainer.appendChild(hourlyHumidity);

  return infoContainer;
}

function generateTimelineHours(hour) {
  const timelineHour = document.createElement('div');
  timelineHour.className = `timeline-hour hour-${hour}`;
  const time = document.createElement('p');
  time.className = 'timeline-hour-time';

  if (hour >= 10) {
    time.innerText = `${hour}:00`;
  } else {
    time.innerText = `0${hour}:00`;
  }

  let info;

  switch (state.currentTimeline) {
    case 0:
      info = getConditions(hour);
      break;
    case 1:
      info = getTemps(hour);
      break;
    case 2:
      info = getPrecipitation(hour);
      break;
    case 3:
      info = getWind(hour);
      break;
    default:
      break;
  }

  timelineHour.appendChild(time);
  timelineHour.appendChild(info);

  return timelineHour;
}

function generateTimelineDays(day) {
  const timelineDay = document.createElement('div');
  timelineDay.className = `timeline-day day-${day + 1}`;

  for (let i = 0; i < 24; i += 1) {
    const hour = generateTimelineHours(i);
    timelineDay.appendChild(hour);
  }

  return timelineDay;
}

function getTimelineInner() {
  const timelineInner = document.createElement('div');
  timelineInner.className = 'timeline-inner';

  for (let i = 0; i < 3; i += 1) {
    const day = generateTimelineDays(i);
    timelineInner.appendChild(day);
  }

  return timelineInner;
}

function handleShadowTimelineLoading(forecast, index) {
  let days = [];
  console.log(state.timelines);
  switch (index) {
    case 0:
      days = Array
        .from(state.timelines[0].childNodes)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);

      days.forEach((day, dayIndex) => {
        const hours = Array.from(day.querySelectorAll('.timeline-hour'));
        hours.forEach((hour, hourIndex) => {
          const hci = hour.querySelector('.hourly-condition-icon');
          const hct = hour.querySelector('.hourly-condition-text');
          hci.src = `https:${forecast.forecastday[dayIndex].hour[hourIndex].condition.icon}`;
          hct.innerText = forecast.forecastday[dayIndex].hour[hourIndex].condition.text;
        });
      });
      break;
    case 1:
      days = Array
        .from(state.timelines[1].childNodes)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);

      days.forEach((day, dayIndex) => {
        const hours = Array.from(day.querySelectorAll('.timeline-hour'));
        hours.forEach((hour, hourIndex) => {
          const temp = hour.querySelector('.hourly-temp');
          const feelsLike = hour.querySelector('.hourly-feels-like');
          const windChill = hour.querySelector('.hourly-wind-chill');

          temp.innerText = `Temp: ${forecast.forecastday[dayIndex].hour[hourIndex].temp_c}`;
          feelsLike.innerText = `Feels like: ${forecast.forecastday[dayIndex].hour[hourIndex].feelslike_c}`;
          windChill.innerText = `Wind chill: ${forecast.forecastday[dayIndex].hour[hourIndex].windchill_c}`;
        });
      });
      break;
    case 2:
      days = Array
        .from(state.timelines[2].childNodes)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);

      days.forEach((day, dayIndex) => {
        const hours = Array.from(day.querySelectorAll('.timeline-hour'));
        hours.forEach((hour, hourIndex) => {
          const rainChance = hour.querySelector('.hourly-rain-chance');
          const cloudCover = hour.querySelector('.hourly-cloud-cover');
          const humidity = hour.querySelector('.hourly-humidity');

          rainChance.innerText = `Chance: ${forecast.forecastday[dayIndex].hour[hourIndex].chance_of_rain}%`;
          cloudCover.innerText = `Cloud: ${forecast.forecastday[dayIndex].hour[hourIndex].cloud}%`;
          humidity.innerText = `Hum: ${forecast.forecastday[dayIndex].hour[hourIndex].humidity}%`;
        });
      });
      break;
    case 3:
      days = Array
        .from(state.timelines[3].childNodes)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);

      days.forEach((day, dayIndex) => {
        const hours = Array.from(day.querySelectorAll('.timeline-hour'));
        hours.forEach((hour, hourIndex) => {
          const windKph = hour.querySelector('.hourly-wind-kph');
          const gustKph = hour.querySelector('.hourly-gust-kph');
          const windDirection = hour.querySelector('.hourly-wind-dir');

          windKph.innerText = `Wind: ${forecast.forecastday[dayIndex].hour[hourIndex].wind_kph}kph`;
          gustKph.innerText = `Gust: ${forecast.forecastday[dayIndex].hour[hourIndex].gust_kph}kph`;
          windDirection.innerText = forecast.forecastday[dayIndex].hour[hourIndex].wind_dir;
        });
      });
      break;

    default:
      break;
  }
}

function Timeline() {
  const timelineOuter = document.createElement('div');
  timelineOuter.className = 'timeline-outer';
  const timelineInner = getTimelineInner();
  timelineOuter.appendChild(timelineInner);

  timelineOuter.addEventListener('timelineApiResponse', (ev) => {
    const { forecast } = ev.detail;

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 24; j += 1) {
        const hci = document.body.querySelector(`.day-${i + 1} .hci-${j}`);
        const hct = document.body.querySelector(`.day-${i + 1} .hct-${j}`);

        hci.src = `https:${forecast.forecastday[i].hour[j].condition.icon}`;
        hct.innerText = forecast.forecastday[i].hour[j].condition.text;
      }
    }
  });

  for (let i = 0; i < 4; i += 1) {
    state.currentTimeline = i;
    state.timelines[i] = getTimelineInner();
    state.timelines[i].addEventListener('loadShadowTimelines', (ev) => {
      const { forecast } = ev.detail;
      handleShadowTimelineLoading(forecast, i);
    });
  }

  return timelineOuter;
}

export {
  state,
  Timeline,
};
