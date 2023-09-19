import Header from "./header";

export default function App() {
  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  appContainer.appendChild(Header());
//  appContainer.appendChild(WeatherDashboard());

  return appContainer;
}
