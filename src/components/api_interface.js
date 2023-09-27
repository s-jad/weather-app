import { state } from './timeline';

function handleHeaderEventDispatch(location, current) {
  const header = document.body.querySelector('.site-header');

  const currentCityResponseEvent = new CustomEvent('currentCityApiResponse', {
    detail: {
      location,
    },
  });

  const currentConditionResponseEvent = new CustomEvent('currentConditionApiResponse', {
    detail: {
      current,
    },
  });

  header.dispatchEvent(currentCityResponseEvent);
  header.dispatchEvent(currentConditionResponseEvent);
}

function handleAstroEventDispatch(astro) {
  const astroCard = document.body.querySelector('.astro-card');

  const astroResponseEvent = new CustomEvent('astroApiResponse', {
    detail: {
      astro,
    },
  });

  astroCard.dispatchEvent(astroResponseEvent);
}

function handleDayCardEventDispatch(forecastDay, current) {
  const dayCard = document.body.querySelector('.day-card');
  const dashboardDayTitle = document.body.querySelector('.dashboard-day-title');

  const dayCardResponseEvent = new CustomEvent('dayCardResponse', {
    detail: {
      forecastDay,
      current,
    },
  });

  dayCard.dispatchEvent(dayCardResponseEvent);
  dashboardDayTitle.dispatchEvent(dayCardResponseEvent);
}

function handleTimelineEventDispatch(forecast) {
  const timeLine = document.body.querySelector('.timeline-outer');

  const timelineResponseEvent = new CustomEvent('timelineApiResponse', {
    detail: {
      forecast,
    },
  });

  timeLine.dispatchEvent(timelineResponseEvent);
}

function handleShadowTimelineEventDispatch(forecast) {
  const timeLines = state.timelines;
  const timelineResponseEvent = new CustomEvent('loadShadowTimelines', {
    detail: {
      forecast,
    },
  });

  timeLines.forEach((timeline) => timeline.dispatchEvent(timelineResponseEvent));
}

function handleShowImperialMetricSwitch() {
  const timelineSidebar = document.body.querySelector('.timeline-sidebar');

  const sidebarEvent = new CustomEvent('apiLoaded', {});
  timelineSidebar.dispatchEvent(sidebarEvent);
}

export default async function getCityWeatherData(city) {
  try {
    const request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e1e38ce47b19465289d103419231909&q=${city}&days=3&aqi=no&alerts=no`, { mode: 'cors' });

    const response = await request.json();
    const { location, current, forecast } = response;

    handleHeaderEventDispatch(location, current);
    handleAstroEventDispatch(forecast.forecastday[0].astro);
    handleDayCardEventDispatch(forecast.forecastday[0], current);
    handleTimelineEventDispatch(forecast);
    handleShadowTimelineEventDispatch(forecast);
    handleShowImperialMetricSwitch();
  } catch (error) {
    console.warn(error);
  }
}
