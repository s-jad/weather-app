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
  const hourlyMaxTemp = document.createElement('p');
  hourlyMaxTemp.className = `hourly-max-temp h-maxt-${hour}`;
  const hourlyAvgTemp = document.createElement('p');
  hourlyAvgTemp.className = `hourly-avg-temp h-avgt-${hour}`;
  const hourlyMinTemp = document.createElement('p');
  hourlyMinTemp.className = `hourly-min-temp h-mint-${hour}`;
  infoContainer.appendChild(hourlyMaxTemp);
  infoContainer.appendChild(hourlyAvgTemp);
  infoContainer.appendChild(hourlyMinTemp);

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

  state.timelines[0] = timelineInner;

  for (let i = 1; i < 4; i += 1) {
    state.currentTimeline = i;
    state.timelines[i] = getTimelineInner();
  }

  return timelineOuter;
}

export {
  state,
  Timeline,
};
