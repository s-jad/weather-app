import Timeline from './timeline';
import AstroCard from './astro_card';
import DayCard from './day_card';

function timeLineSwitch() {
  const switchContainer = document.createElement('div');
  switchContainer.className = 'timeline-switch-container';

  switchContainer.innerHTML = `
    <div class="cover-container">
      <input class="invisible-radio radio-one" type="radio" name="timeline-display">
      <div class="cover cover-one"></div>
      <div class="timeline-button show-temp"></div>
    </div>

    <div class="cover-container">
      <input class="invisible-radio radio-two" type="radio" name="timeline-display">
      <div class="cover cover-two"></div>
      <div class="timeline-button show-precipitation"></div>
    </div>

    <div class="cover-container">
      <input class="invisible-radio radio-three" type="radio" name="timeline-display">
      <div class="cover cover-three"></div>
      <div class="timeline-button show-wind"></div>
    </div>

    <div class="cover-container">
      <input class="invisible-radio radio-four" type="radio" name="timeline-display">
      <div class="cover cover-four"></div>
      <div class="timeline-button show-misc"></div>
    </div>
  `;

  return switchContainer;
}

export default function WeatherDashboard() {
  const weatherDashboard = document.createElement('div');
  weatherDashboard.className = 'weather-dashboard';

  weatherDashboard.appendChild(DayCard());
  weatherDashboard.appendChild(AstroCard());
  weatherDashboard.appendChild(timeLineSwitch());
  weatherDashboard.appendChild(Timeline());

  return weatherDashboard;
}
