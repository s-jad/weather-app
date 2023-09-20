import Header from './header';
import WeatherDashboard from './weather_dashboard';

export default function App() {
  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  appContainer.appendChild(Header());
  appContainer.appendChild(WeatherDashboard());

  return appContainer;
}
