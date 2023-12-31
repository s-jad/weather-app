const state = {
  currentTimeline: 0,
  timelines: [],
  currentForecast: {},
  currentMeasurementSystem: 'metric',
};

function getConditions(hour) {
  const infoContainer = document.createElement('div');
  infoContainer.className = 'timeline-hour-info-container';
  const hourlyConditionIcon = new Image();
  hourlyConditionIcon.className = `hourly-condition-icon hci-${hour}`;
  hourlyConditionIcon.alt = 'Current Weather';
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
  hourlyFeelsLike.className = `hourly-feels-like h-temp-${hour}`;
  const hourlyWindChill = document.createElement('p');
  hourlyWindChill.className = `hourly-wind-chill h-temp-${hour}`;
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
  hourlyGustKph.className = `hourly-gust-kph h-wind-${hour}`;
  const hourlyWindDirection = document.createElement('p');
  hourlyWindDirection.className = `hourly-direction h-dir-${hour}`;
  const hourlyWindIcon = document.createElement('div');
  hourlyWindIcon.className = `hourly-wind-icon-container h-wind-icon-${hour}`;
  infoContainer.appendChild(hourlyWindKph);
  infoContainer.appendChild(hourlyGustKph);
  infoContainer.appendChild(hourlyWindIcon);
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

function getWindDirIcon(windDegree, parent) {
  const currentIcon = parent.querySelector('.hourly-wind-icon');

  if (currentIcon) {
    parent.removeChild(currentIcon);
  }

  const windDirectionInner = document.createElement('div');
  windDirectionInner.className = 'hourly-wind-icon';
  const windDirectionLine = document.createElement('div');
  windDirectionLine.className = 'hourly-wind-icon-line';
  const windDirectionPoint = document.createElement('div');
  windDirectionPoint.className = 'hourly-wind-icon-point';

  windDirectionInner.style.transform = `rotate(${windDegree}deg)`;
  windDirectionInner.appendChild(windDirectionLine);
  windDirectionInner.appendChild(windDirectionPoint);

  return windDirectionInner;
}

function handleShadowTimelineLoading(forecast, index) {
  let days = [];

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
          
          if (state.currentMeasurementSystem === 'metric') {
            temp.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].temp_c}°C`;
            feelsLike.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].feelslike_c}°C`;
            windChill.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].windchill_c}°C`;
          } else if (state.currentMeasurementSystem === 'imperial') {
            temp.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].temp_f}°F`;
            feelsLike.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].feelslike_f}°F`;
            windChill.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].windchill_f}°F`;
          }
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

          rainChance.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].chance_of_rain}%`;
          cloudCover.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].cloud}%`;
          humidity.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].humidity}%`;
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
          const windDirection = hour.querySelector('.hourly-direction');
          const windDirIconContainer = hour.querySelector('.hourly-wind-icon-container');
          
          if (state.currentMeasurementSystem === 'metric') {
            windKph.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].wind_kph}kph`;
            gustKph.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].gust_kph}kph`;
          } else if (state.currentMeasurementSystem === 'imperial') {
            windKph.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].wind_mph}mph`;
            gustKph.innerText = `${forecast.forecastday[dayIndex].hour[hourIndex].gust_mph}mph`;
          }
          windDirection.innerText = forecast.forecastday[dayIndex].hour[hourIndex].wind_dir;
          const windDegree = forecast.forecastday[dayIndex].hour[hourIndex].wind_degree;
          windDirIconContainer.appendChild(getWindDirIcon(windDegree, windDirIconContainer));
        });
      });
      break;

    default:
      break;
  }
}

function getImperialMetricSwitch() {
  const container = document.createElement('div');
  container.className = 'imperial-metric-container';
  const imperialBtn = document.createElement('div');
  imperialBtn.className = 'imperial-btn';
  imperialBtn.ariaRoleDescription = 'button';
  imperialBtn.textContent = '°F';
  const metricBtn = document.createElement('div');
  metricBtn.className = 'metric-btn';
  metricBtn.ariaRoleDescription = 'button';
  metricBtn.textContent = '°C';

  const cover = document.createElement('div');
  cover.className = 'imperial-metric-cover';
  container.appendChild(metricBtn);
  container.appendChild(imperialBtn);
  container.appendChild(cover);

  let imMeSwitch;
  let importExecuted = false;

  container.addEventListener('click', (ev) => {
    if (!importExecuted) {
      import(/* webpackChunkName: "imperial_metric_switch" */ './imperial_metric_switch')
        .then((module) => {
          return module.default;
        })
        .then((imperialMetricSwitch) => {
          imMeSwitch = imperialMetricSwitch;
          importExecuted = true;
          continueSwitchExecution(ev);
        })
        .catch((error) => {
          console.warn(error);
        });
    } else {
      continueSwitchExecution(ev);
    }
  });

  function continueSwitchExecution(ev) {
    imMeSwitch(ev, imperialBtn, metricBtn);
  }

  return container;
}

function getTimelineSidebar() {
  const timelineSidebar = document.createElement('div');
  timelineSidebar.className = 'timeline-sidebar';
  const timelineBorderTop = document.createElement('div');
  timelineBorderTop.className = 'timeline-border-top';
  const timelineBorderTopInner = document.createElement('div');
  timelineBorderTopInner.className = 'timeline-border-top-inner';
  timelineBorderTop.appendChild(timelineBorderTopInner);
  timelineSidebar.appendChild(timelineBorderTop);

  for (let i = 0; i < 3; i += 1) {
    const info = document.createElement('p');
    info.className = 'sidebar-info';
    timelineSidebar.appendChild(info);
  }

  const timelineBorderBottom = document.createElement('div');
  timelineBorderBottom.className = 'timeline-border-bottom';
  const timelineBorderBottomInner = document.createElement('div');
  timelineBorderBottomInner.className = 'timeline-border-bottom-inner';
  timelineBorderBottom.appendChild(timelineBorderBottomInner);
  timelineSidebar.appendChild(timelineBorderBottom);
  const firstInfo = timelineSidebar.querySelector('.sidebar-info:first-of-type');

  let switchLoaded = false;
  timelineSidebar.addEventListener('apiLoaded', () => {
    if (switchLoaded) {
      return;
    }
    timelineSidebar.insertBefore(getImperialMetricSwitch(), firstInfo);
    switchLoaded = true;
  });
  return timelineSidebar;
}

function generateTimeLineObservers(timeline) {
  const dayTwoMidnight = timeline.querySelector('.day-2 .hour-0');
  const dayThreeMidnight = timeline.querySelector('.day-3 .hour-0');
  const astroCard = document.body.querySelector('.astro-card');
  const dayCard = document.body.querySelector('.day-card');
  const dayTitle = document.body.querySelector('.dashboard-day-title');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observerDayTwo = new IntersectionObserver((entries) => {
    if (state.currentForecast.forecastday === undefined) {
      return;
    }

    entries.forEach((entry) => {
      if (entry.boundingClientRect.width === 0) {
        return;
      }

      if (entry.isIntersecting
        && entry.boundingClientRect.x < entry.rootBounds.width / 2
      ) {
        const event = new CustomEvent('dayTwoRight', {
          detail: {
            date: state.currentForecast.forecastday[0].date,
            day: state.currentForecast.forecastday[0].day,
            astro: state.currentForecast.forecastday[0].astro,
          },
        });

        astroCard.dispatchEvent(event);
        dayCard.dispatchEvent(event);
        dayTitle.dispatchEvent(event);
      } else if (entry.isIntersecting
        && entry.boundingClientRect.x > entry.rootBounds.width / 2
      ) {
        const event = new CustomEvent('dayTwoVisible', {
          detail: {
            date: state.currentForecast.forecastday[1].date,
            day: state.currentForecast.forecastday[1].day,
            astro: state.currentForecast.forecastday[1].astro,
          },
        });

        astroCard.dispatchEvent(event);
        dayCard.dispatchEvent(event);
        dayTitle.dispatchEvent(event);
      }
    });
  }, options);

  const observerDayThree = new IntersectionObserver((entries) => {
    if (state.currentForecast.forecastday === undefined) {
      return;
    }

    entries.forEach((entry) => {
      if (entry.boundingClientRect.width === 0) {
        return;
      }

      if (entry.isIntersecting
        && entry.boundingClientRect.x < entry.rootBounds.width / 2
      ) {
        const event = new CustomEvent('dayThreeRight', {
          detail: {
            date: state.currentForecast.forecastday[1].date,
            day: state.currentForecast.forecastday[1].day,
            astro: state.currentForecast.forecastday[1].astro,
          },
        });

        astroCard.dispatchEvent(event);
        dayCard.dispatchEvent(event);
        dayTitle.dispatchEvent(event);
      } else if (entry.isIntersecting
        && entry.boundingClientRect.x > entry.rootBounds.width / 2
      ) {
        const event = new CustomEvent('dayThreeVisible', {
          detail: {
            date: state.currentForecast.forecastday[2].date,
            day: state.currentForecast.forecastday[2].day,
            astro: state.currentForecast.forecastday[2].astro,
          },
        });

        astroCard.dispatchEvent(event);
        dayCard.dispatchEvent(event);
        dayTitle.dispatchEvent(event);
      }
    });
  }, options);

  observerDayTwo.observe(dayTwoMidnight);
  observerDayThree.observe(dayThreeMidnight);
}

function Timeline() {
  const timelineOuter = document.createElement('div');
  timelineOuter.className = 'timeline-outer';
  timelineOuter.appendChild(getTimelineSidebar());

  timelineOuter.addEventListener('timelineApiResponse', (ev) => {
    const { forecast } = ev.detail;
    state.currentForecast = forecast;
  });

  for (let i = 0; i < 4; i += 1) {
    state.currentTimeline = i;
    state.timelines[i] = getTimelineInner();
    state.timelines[i].addEventListener('loadShadowTimelines', (ev) => {
      const { forecast } = ev.detail;
      handleShadowTimelineLoading(forecast, i);
      generateTimeLineObservers(state.timelines[i]);
    });
  }

  timelineOuter.appendChild(state.timelines[0]);
  const rightBar = document.createElement('div');
  rightBar.className = 'right-bar';
  timelineOuter.appendChild(rightBar);

  return timelineOuter;
}

export {
  state,
  Timeline,
};
