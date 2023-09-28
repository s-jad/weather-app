export default function SearchBar() {
  const search = document.createElement('input');
  search.className = 'search-weather';
  search.type = 'text';
  search.name = 'search-bar';

  let importExecuted = false;
  let gcwd;

  search.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter') {
      if (!importExecuted) {
        import(/* webpackChunkName: "api_interface" */ './api_interface')
          .then((module) => {
            return module.default;
          })
          .then((getCityWeatherData) => {
            gcwd = getCityWeatherData;
            continueSearchExecution(search.value.trim())
            importExecuted = true;
          })
          .catch((error) => {
            console.warn(error);
          });
      } else {
        continueSearchExecution(search.value.trim());
      }
    }
  });
  
  function continueSearchExecution(search) {
    gcwd(search);
  }
  return search;
}
