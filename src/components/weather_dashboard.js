import Timeline from './timeline';
import AstroCard from './astro_card';
import DayCard from './day_card';

export default function WeatherDashboard() {
  const weatherDashboard = document.createElement('weather-dashboard');
  weatherDashboard.className = 'weather-dashboard';

  weatherDashboard.appendChild(DayCard());
  weatherDashboard.appendChild(AstroCard());
  weatherDashboard.appendChild(Timeline());

  return weatherDashboard;
}
