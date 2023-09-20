import Timeline from './timeline';

function DayCard() {
  const dayCard = document.createElement('div');
  dayCard.className = 'day-card';

  return dayCard;
}

function AstroCard() {
  const astroCard = document.createElement('div');
  astroCard.className = 'astro-card';

  return astroCard;
}

export default function WeatherDashboard() {
  const weatherDashboard = document.createElement('weather-dashboard');
  weatherDashboard.className = 'weather-dashboard';

  weatherDashboard.appendChild(DayCard());
  weatherDashboard.appendChild(AstroCard());
  weatherDashboard.appendChild(Timeline());

  return weatherDashboard;
}
