function handleHeaderEventDispatch(location, condition) {
  const currentCityContainer = document.body.querySelector('.current-city-container');
  const currentConditionContainer = document.body.querySelector('.current-condition-container');

  const currentCityResponseEvent = new CustomEvent('currentCityApiResponse', {
    detail: {
      location,
    },
  });

  const currentConditionResponseEvent = new CustomEvent('currentConditionApiResponse', {
    detail: {
      condition,
    },
  });

  currentCityContainer.dispatchEvent(currentCityResponseEvent);
  currentConditionContainer.dispatchEvent(currentConditionResponseEvent);
}

export default async function getCityWeatherData(city) {
  try {
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=e1e38ce47b19465289d103419231909&q=${city}&aqi=no`, { mode: 'cors' });

    const response = await request.json();
    const { location, current } = response;

    handleHeaderEventDispatch(location, current.condition);
  } catch (error) {
    console.log(error)
  }
}
