function getTimelineHour(hour) {
  const timelineHour = document.createElement('div');
  timelineHour.className = `timeline-hour hour-${hour}`;

  return timelineHour;
}

function getTimelineDay(day) {
  const timelineDay = document.createElement('div');
  timelineDay.className = `timeline-day day-${day + 1}`;

  for (let i = 1; i < 24; i += 1) {
    const hour = getTimelineHour(i);
    timelineDay.appendChild(hour);
  }

  return timelineDay;
}

export default function Timeline() {
  const timelineOuter = document.createElement('div');
  timelineOuter.className = 'timeline-outer';

  for (let i = 0; i < 3; i += 1) {
    const day = getTimelineDay(i);
    timelineOuter.appendChild(day);
  }

  return timelineOuter;
}
