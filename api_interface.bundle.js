"use strict";
(self["webpackChunkDevelopment"] = self["webpackChunkDevelopment"] || []).push([["api_interface"],{

/***/ "./src/components/api_interface.js":
/*!*****************************************!*\
  !*** ./src/components/api_interface.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCityWeatherData)
/* harmony export */ });
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline */ "./src/components/timeline.js");


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
  const timeLines = _timeline__WEBPACK_IMPORTED_MODULE_0__.state.timelines;
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

async function getCityWeatherData(city) {
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpX2ludGVyZmFjZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDRDQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFZTtBQUNmO0FBQ0EscUhBQXFILEtBQUssNkJBQTZCLGNBQWM7QUFDcks7QUFDQSxZQUFZLDhCQUE4Qjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL2NvbXBvbmVudHMvYXBpX2ludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vdGltZWxpbmUnO1xuXG5mdW5jdGlvbiBoYW5kbGVIZWFkZXJFdmVudERpc3BhdGNoKGxvY2F0aW9uLCBjdXJyZW50KSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG5cbiAgY29uc3QgY3VycmVudENpdHlSZXNwb25zZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjdXJyZW50Q2l0eUFwaVJlc3BvbnNlJywge1xuICAgIGRldGFpbDoge1xuICAgICAgbG9jYXRpb24sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgY3VycmVudENvbmRpdGlvblJlc3BvbnNlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2N1cnJlbnRDb25kaXRpb25BcGlSZXNwb25zZScsIHtcbiAgICBkZXRhaWw6IHtcbiAgICAgIGN1cnJlbnQsXG4gICAgfSxcbiAgfSk7XG5cbiAgaGVhZGVyLmRpc3BhdGNoRXZlbnQoY3VycmVudENpdHlSZXNwb25zZUV2ZW50KTtcbiAgaGVhZGVyLmRpc3BhdGNoRXZlbnQoY3VycmVudENvbmRpdGlvblJlc3BvbnNlRXZlbnQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBc3Ryb0V2ZW50RGlzcGF0Y2goYXN0cm8pIHtcbiAgY29uc3QgYXN0cm9DYXJkID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYXN0cm8tY2FyZCcpO1xuXG4gIGNvbnN0IGFzdHJvUmVzcG9uc2VFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnYXN0cm9BcGlSZXNwb25zZScsIHtcbiAgICBkZXRhaWw6IHtcbiAgICAgIGFzdHJvLFxuICAgIH0sXG4gIH0pO1xuXG4gIGFzdHJvQ2FyZC5kaXNwYXRjaEV2ZW50KGFzdHJvUmVzcG9uc2VFdmVudCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURheUNhcmRFdmVudERpc3BhdGNoKGZvcmVjYXN0RGF5LCBjdXJyZW50KSB7XG4gIGNvbnN0IGRheUNhcmQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5kYXktY2FyZCcpO1xuICBjb25zdCBkYXNoYm9hcmREYXlUaXRsZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmRhc2hib2FyZC1kYXktdGl0bGUnKTtcblxuICBjb25zdCBkYXlDYXJkUmVzcG9uc2VFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnZGF5Q2FyZFJlc3BvbnNlJywge1xuICAgIGRldGFpbDoge1xuICAgICAgZm9yZWNhc3REYXksXG4gICAgICBjdXJyZW50LFxuICAgIH0sXG4gIH0pO1xuXG4gIGRheUNhcmQuZGlzcGF0Y2hFdmVudChkYXlDYXJkUmVzcG9uc2VFdmVudCk7XG4gIGRhc2hib2FyZERheVRpdGxlLmRpc3BhdGNoRXZlbnQoZGF5Q2FyZFJlc3BvbnNlRXZlbnQpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUaW1lbGluZUV2ZW50RGlzcGF0Y2goZm9yZWNhc3QpIHtcbiAgY29uc3QgdGltZUxpbmUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZS1vdXRlcicpO1xuXG4gIGNvbnN0IHRpbWVsaW5lUmVzcG9uc2VFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndGltZWxpbmVBcGlSZXNwb25zZScsIHtcbiAgICBkZXRhaWw6IHtcbiAgICAgIGZvcmVjYXN0LFxuICAgIH0sXG4gIH0pO1xuXG4gIHRpbWVMaW5lLmRpc3BhdGNoRXZlbnQodGltZWxpbmVSZXNwb25zZUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2hhZG93VGltZWxpbmVFdmVudERpc3BhdGNoKGZvcmVjYXN0KSB7XG4gIGNvbnN0IHRpbWVMaW5lcyA9IHN0YXRlLnRpbWVsaW5lcztcbiAgY29uc3QgdGltZWxpbmVSZXNwb25zZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdsb2FkU2hhZG93VGltZWxpbmVzJywge1xuICAgIGRldGFpbDoge1xuICAgICAgZm9yZWNhc3QsXG4gICAgfSxcbiAgfSk7XG5cbiAgdGltZUxpbmVzLmZvckVhY2goKHRpbWVsaW5lKSA9PiB0aW1lbGluZS5kaXNwYXRjaEV2ZW50KHRpbWVsaW5lUmVzcG9uc2VFdmVudCkpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTaG93SW1wZXJpYWxNZXRyaWNTd2l0Y2goKSB7XG4gIGNvbnN0IHRpbWVsaW5lU2lkZWJhciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLnRpbWVsaW5lLXNpZGViYXInKTtcblxuICBjb25zdCBzaWRlYmFyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2FwaUxvYWRlZCcsIHt9KTtcbiAgdGltZWxpbmVTaWRlYmFyLmRpc3BhdGNoRXZlbnQoc2lkZWJhckV2ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eVdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWUxZTM4Y2U0N2IxOTQ2NTI4OWQxMDM0MTkyMzE5MDkmcT0ke2NpdHl9JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zdCB7IGxvY2F0aW9uLCBjdXJyZW50LCBmb3JlY2FzdCB9ID0gcmVzcG9uc2U7XG5cbiAgICBoYW5kbGVIZWFkZXJFdmVudERpc3BhdGNoKGxvY2F0aW9uLCBjdXJyZW50KTtcbiAgICBoYW5kbGVBc3Ryb0V2ZW50RGlzcGF0Y2goZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8pO1xuICAgIGhhbmRsZURheUNhcmRFdmVudERpc3BhdGNoKGZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLCBjdXJyZW50KTtcbiAgICBoYW5kbGVUaW1lbGluZUV2ZW50RGlzcGF0Y2goZm9yZWNhc3QpO1xuICAgIGhhbmRsZVNoYWRvd1RpbWVsaW5lRXZlbnREaXNwYXRjaChmb3JlY2FzdCk7XG4gICAgaGFuZGxlU2hvd0ltcGVyaWFsTWV0cmljU3dpdGNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9