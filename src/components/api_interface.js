function handleHeaderEventDispatch(location, condition) {
  const header = document.body.querySelector('.site-header');

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

  header.dispatchEvent(currentCityResponseEvent);
  header.dispatchEvent(currentConditionResponseEvent);
}

export default async function getCityWeatherData(city) {
  try {
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=e1e38ce47b19465289d103419231909&q=${city}&aqi=no`, { mode: 'cors' });

    const response = await request.json();
    const { location, current } = response;

    handleHeaderEventDispatch(location, current.condition);
  } catch (error) {
    console.log(error);
  }
}
