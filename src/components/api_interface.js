const currentCityData = {
  city: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    localtime: '2023-09-19 12:49',
  },
  condition: {
    text: 'Overcast',
    icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
  },
  weather: {
    cloud: 100,
    feelslike_c: 18,
    feelslike_f: 64.4,
    gust_kph: 40.4,
    gust_mph: 25.1,
    humidity: 77,
    is_day: 1,
    last_updated: '2023-09-19 12:45',
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 29.68,
    pressure_mb: 1005,
    temp_c: 18,
    temp_f: 64.4,
    uv: 4,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 230,
    wind_dir: 'SW',
    wind_kph: 34.9,
    wind_mph: 21.7,
  },
};

async function getCityWeatherData(city) {
  const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=e1e38ce47b19465289d103419231909&q=${city}&aqi=no`, { mode: 'cors' });

  const response = await request.json();

  return response;
}

export {
  getCityWeatherData,
  currentCityData,
}
