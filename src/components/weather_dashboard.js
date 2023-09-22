import { state, Timeline } from './timeline';
import AstroCard from './astro_card';
import DayCard from './day_card';

function handleTimelineSwitchBtns(ev) {
  const btn = ev.target;

  const timelineOuter = document.body.querySelector('.timeline-outer');

  while (timelineOuter.firstChild) {
    timelineOuter.removeChild(timelineOuter.firstChild);
  }

  switch (btn) {
    case btn.id === 'radio-condition':
      state.currentTimeline = 0;
      break;

    case btn.id === 'radio-temp':
      state.currentTimeline = 1;
      break;

    case btn.id === 'radio-precipitation':
      state.currentTimeline = 2;
      break;

    case btn.id === 'radio-wind':
      state.currentTimeline = 3;
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
