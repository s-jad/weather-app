const data = {
  forecast: {},
};

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

function handleDayCardEventDispatch(forecastDay) {
  const dayCard = document.body.querySelector('.day-card');

  const dayCardResponseEvent = new CustomEvent('dayCardResponse', {
    detail: {
      forecastDay,
    },
  });

  dayCard.dispatchEvent(dayCardResponseEvent);
}

async function getCityWeatherData(city) {
  try {
    const request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e1e38ce47b19465289d103419231909&q=${city}&days=3&aqi=no&alerts=no`, { mode: 'cors' });

    const response = await request.json();
    const { location, current, forecast } = response;

    handleHeaderEventDispatch(location, current);
    data.forecast = forecast;

    handleAstroEventDispatch(forecast.forecastday[0].astro);
    handleDayCardEventDispatch(forecast.forecastday[0]);
  } catch (error) {
    console.log(error);
  }
}

export {
  getCityWeatherData,
  data,
};
