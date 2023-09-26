import { state, Timeline } from './timeline';
import AstroCard from './astro_card';
import DayCard from './day_card';

function handleTimelineSwitchBtns(ev) {
  const btn = ev.target;

  const timelineOuter = document.body.querySelector('.timeline-outer');
  const timelineInner = document.body.querySelector('.timeline-inner');
  timelineOuter.removeChild(timelineInner);
  const timelineSidebar = timelineOuter.querySelector('.timeline-sidebar');
  const timelineRightBar = timelineOuter.querySelector('.right-bar');
  const sidebarInfos = Array.from(timelineSidebar.querySelectorAll('.sidebar-info'));

  switch (btn.id) {
    case 'radio-condition':
      timelineOuter.insertBefore(state.timelines[0], timelineRightBar);
      sidebarInfos[0].innerText = '';
      sidebarInfos[1].innerText = '';
      sidebarInfos[2].innerText = '';
      break;

    case 'radio-temp':
      timelineOuter.insertBefore(state.timelines[1], timelineRightBar);
      sidebarInfos[0].innerText = 'Max temp:';
      sidebarInfos[1].innerText = 'Feels like:';
      sidebarInfos[2].innerText = 'Wind chill:';
      break;

    case 'radio-precipitation':
      timelineOuter.insertBefore(state.timelines[2], timelineRightBar);
      sidebarInfos[0].innerText = 'Rain Chance:';
      sidebarInfos[1].innerText = 'Cloud Cover:';
      sidebarInfos[2].innerText = 'Humidity:';
      break;

    case 'radio-wind':
      timelineOuter.insertBefore(state.timelines[3], timelineRightBar);
      sidebarInfos[0].innerText = 'Wind speed:';
      sidebarInfos[1].innerText = 'Gust speed:';
      sidebarInfos[2].innerText = 'Direction:';
      break;

    default:
      break;
  }
}

function getTimelineIcons() {
  const condition = new Image();
  condition.src = '../assets/imgs/rain.png';
  const temp = new Image();
  temp.src = '../assets/imgs/thermometer.png';
  const rain = new Image();
  rain.src = '../assets/imgs/raindrop.png';
  const wind = new Image();
  wind.src = '../assets/imgs/wind.png';

  return {
    condition,
    temp,
    rain,
    wind,
  };
}

function generateTimeLineSwitch() {
  const switchContainer = document.createElement('div');
  switchContainer.className = 'timeline-switch-container';

  switchContainer.innerHTML = `
    <div class="cover-container">
      <input id="radio-condition" class="invisible-radio radio-one" type="radio" name="timeline-display" checked/>
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
  const {
    condition,
    temp,
    rain,
    wind,
  } = getTimelineIcons();
  const timelineBtns = Array.from(switchContainer.querySelectorAll('.timeline-button'));

  timelineBtns[0].appendChild(condition);
  timelineBtns[1].appendChild(temp);
  timelineBtns[2].appendChild(rain);
  timelineBtns[3].appendChild(wind);

  radioBtns.forEach((btn) => {
    btn.addEventListener('click', handleTimelineSwitchBtns);
  });

  return switchContainer;
}

export default function WeatherDashboard() {
  const weatherDashboard = document.createElement('div');
  weatherDashboard.className = 'weather-dashboard';
  const centerFlex = document.createElement('div');
  centerFlex.className = 'center-flex';
  const dayTitle = document.createElement('h2');
  dayTitle.className = 'dashboard-day-title';

  dayTitle.addEventListener('dayCardResponse', (ev) => {
    const { date } = ev.detail.forecastDay;
    dayTitle.textContent = `${date}`;
  });

  dayTitle.addEventListener('dayTwoVisible', (ev) => {
    const { date } = ev.detail;
    dayTitle.textContent = `${date}`;
  });

  dayTitle.addEventListener('dayTwoRight', (ev) => {
    const { date } = ev.detail;
    dayTitle.textContent = `${date}`;
  });

  dayTitle.addEventListener('dayThreeVisible', (ev) => {
    const { date } = ev.detail;
    dayTitle.textContent = `${date}`;
  });

  dayTitle.addEventListener('dayThreeRight', (ev) => {
    const { date } = ev.detail;
    dayTitle.textContent = `${date}`;
  });

  centerFlex.appendChild(dayTitle);
  centerFlex.appendChild(generateTimeLineSwitch());

  weatherDashboard.appendChild(DayCard());
  weatherDashboard.appendChild(AstroCard());
  weatherDashboard.appendChild(centerFlex);
  weatherDashboard.appendChild(Timeline());

  const bottomBar = document.createElement('div');
  bottomBar.className = 'bottom-bar';
  weatherDashboard.appendChild(bottomBar);

  return weatherDashboard;
}
