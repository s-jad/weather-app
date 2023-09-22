import { data } from './api_interface';

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

  const infoContainer = document.createElement('div');
  infoContainer.className = 'timeline-hour-info-container';

  const hourlyConditionIcon = new Image();
  hourlyConditionIcon.className = `hourly-condition-icon hci-${hour}`;
  const hourlyConditionText = document.createElement('p');
  hourlyConditionText.className = `hourly-condition-text hct-${hour}`;

  infoContainer.appendChild(hourlyConditionIcon);
  infoContainer.appendChild(hourlyConditionText);

  timelineHour.appendChild(time);
  timelineHour.appendChild(infoContainer);

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

export default function Timeline() {
  const timelineOuter = document.createElement('div');
  timelineOuter.className = 'timeline-outer';

  for (let i = 0; i < 3; i += 1) {
    const day = generateTimelineDays(i);
    timelineOuter.appendChild(day);
  }

  timelineOuter.addEventListener('timelineApiResponse', (ev) => {
    const { forecast } = ev.detail;

    for (let i = 0; i < 24; i += 1) {
      const hci = document.body.querySelector(`.hci-${i}`);
      const hct = document.body.querySelector(`.hct-${i}`);

      hci.src = `https:${forecast.forecastday[0].hour[i].condition.icon}`;
      hct.innerText = forecast.forecastday[0].hour[i].condition.text;
    }
  });

  return timelineOuter;
}
