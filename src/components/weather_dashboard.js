import { state, Timeline } from './timeline';
import AstroCard from './astro_card';
import DayCard from './day_card';

function handleTimelineSwitchBtns(ev) {
  const btn = ev.target;

  const timelineOuter = document.body.querySelector('.timeline-outer');
  const timelineInner = document.body.querySelector('.timeline-inner');
  timelineOuter.removeChild(timelineInner);
  const timelineSidebar = timelineOuter.querySelector('.timeline-sidebar');
  const sidebarInfos = Array.from(timelineSidebar.querySelectorAll('.sidebar-info'));

  switch (btn.id) {
    case 'radio-condition':
      timelineOuter.appendChild(state.timelines[0]);
      sidebarInfos[0].innerText = '';
      sidebarInfos[1].innerText = '';
      sidebarInfos[2].innerText = '';
      break;

    case 'radio-temp':
      timelineOuter.appendChild(state.timelines[1]);
      sidebarInfos[0].innerText = 'Max temp:';
      sidebarInfos[1].innerText = 'Feels like:';
      sidebarInfos[2].innerText = 'Wind chill:';
      break;

    case 'radio-precipitation':
      timelineOuter.appendChild(state.timelines[2]);
      sidebarInfos[0].innerText = 'Rain Chance:';
      sidebarInfos[1].innerText = 'Cloud Cover:';
      sidebarInfos[2].innerText = 'Humidity:';
      break;

    case 'radio-wind':
      timelineOuter.appendChild(state.timelines[3]);
      sidebarInfos[0].innerText = 'Wind speed:';
      sidebarInfos[1].innerText = 'Gust speed:';
      sidebarInfos[2].innerText = 'Direction:';
      break;
    default:
      break;
  }
}

function generateTimeLineSwitch() {
  const switchContainer = document.createElement('div');
  switchContainer.className = 'timeline-switch-container';

  switchContainer.innerHTML = `
    <div class="cover-container">
      <input id="radio-condition" class="invisible-radio radio-one" type="radio" name="timeline-display"/>
      <div class="cover cover-one"></div>
      <div class="timeline-button show-condition"></div>
    </div>

    <div class="cover-container">
      <input id="radio-temp"  class="invisible-radio radio-two" type="radio" name="timeline-display"/>
      <div class="cover cover-two"></div>
      <div class="timeline-button show-temp"></div>
    </div>

    <div class="cover-container">
      <input id="radio-precipitation"  class="invisible-radio radio-three" type="radio" name="timeline-display"/>
      <div class="cover cover-three"></div>
      <div class="timeline-button show-precipitation"></div>
    </div>

    <div class="cover-container">
      <input id="radio-wind"  class="invisible-radio radio-four" type="radio" name="timeline-display"/>
      <div class="cover cover-four"></div>
      <div class="timeline-button show-wind"></div>
    </div>
  `;

  const radioBtns = Array.from(switchContainer.querySelectorAll('.invisible-radio'));

  radioBtns.forEach((btn) => {
    btn.addEventListener('click', handleTimelineSwitchBtns);
  });

  return switchContainer;
}

export default function WeatherDashboard() {
  const weatherDashboard = document.createElement('div');
  weatherDashboard.className = 'weather-dashboard';

  weatherDashboard.appendChild(DayCard());
  weatherDashboard.appendChild(AstroCard());
  weatherDashboard.appendChild(generateTimeLineSwitch());
  weatherDashboard.appendChild(Timeline());

  return weatherDashboard;
}
