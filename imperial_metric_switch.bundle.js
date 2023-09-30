"use strict";
(self["webpackChunkDevelopment"] = self["webpackChunkDevelopment"] || []).push([["imperial_metric_switch"],{

/***/ "./src/components/imperial_metric_switch.js":
/*!**************************************************!*\
  !*** ./src/components/imperial_metric_switch.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imperialMetricSwitch)
/* harmony export */ });
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline */ "./src/components/timeline.js");


function getSwitchableMeasurements() {
  const displayedTemps = Array.from(document.body.querySelectorAll('.day-card p[class*="temp"]'));
  const shadowTemps = Array.from(_timeline__WEBPACK_IMPORTED_MODULE_0__.state.timelines[1].querySelectorAll('p[class*="temp"]'));
  const allTemps = [...displayedTemps, ...shadowTemps];
  const displayedSpeeds = Array.from(document.body.querySelectorAll('.day-card p[class*="wind"]'));
  const shadowSpeeds = Array.from(_timeline__WEBPACK_IMPORTED_MODULE_0__.state.timelines[3].querySelectorAll('p[class*="wind"]'));
  const allSpeeds = [...displayedSpeeds, ...shadowSpeeds];

  const prec = document.body.querySelector('.precipitation');
  const vis = document.body.querySelector('.visibility');
  const allDistances = [prec, vis];

  return {
    allTemps,
    allSpeeds,
    allDistances,
  };
}

function convertTemps(temps, to) {
  if (to === 'imperial') {
    temps.forEach((temp) => {
      const c = temp.innerText.split('°')[0];
      const fm = '°F';
      const parsedC = parseFloat(c, 10);
      const f = Math.round(((parsedC * (9 / 5)) + 32) * 10) / 10;
      temp.innerText = `${f}${fm}`;
    });
  }
  if (to === 'metric') {
    temps.forEach((temp) => {
      const f = temp.innerText.split('°')[0];
      const cm = '°C';
      const parsedF = parseFloat(f, 10);
      const c = Math.round(((parsedF - 32) * (5 / 9)) * 10) / 10;
      temp.innerText = `${c}${cm}`;
    });
  }
}

function convertSpeeds(speeds, to) {
  if (to === 'imperial') {
    speeds.forEach((speed) => {
      const s = speed.innerText.split('k')[0];
      const parsedS = parseFloat(s, 10);
      const sp = Math.round((parsedS / 1.609344) * 10) / 10;
      speed.innerText = `${sp}mph`
    });
  } else if (to === 'metric') {
    speeds.forEach((speed) => {
      const s = speed.innerText.split('m')[0];
      const parsedS = parseFloat(s, 10);
      const sp = Math.round((parsedS * 1.609344) * 10) / 10;
      speed.innerText = `${sp}kph`;
    });
  }
}

function convertDistances(distances, to) {
  if (to === 'imperial') {
    distances.forEach((dist) => {
      if (dist.innerText.includes('mm')) {
        const d = dist.innerText.split('m')[0];
        const parsedD = parseFloat(d, 10);
        const inches = Math.round((parsedD / 25.4) * 10) / 10;
        dist.innerText = `${inches}inches`;
      } else if (dist.innerText.includes('km')) {
        const d = dist.innerText.split('k')[0];
        const parsedD = parseFloat(d, 10);
        const miles = Math.round((parsedD / 1.609344) * 10) / 10;
        dist.innerText = `${miles}miles`;
      }
    });
  } else if (to === 'metric') {
    distances.forEach((dist) => {
      if (dist.innerText.includes('inches')) {
        const d = dist.innerText.split('m')[0];
        const parsedD = parseFloat(d, 10);
        const mm = Math.round((parsedD * 25.4) * 10) / 10;
        dist.innerText = `${mm}mm`;
      } else if (dist.innerText.includes('miles')) {
        const d = dist.innerText.split('m')[0];
        const parsedD = parseFloat(d, 10);
        const km = Math.round((parsedD * 1.609344) * 10) / 10;
        dist.innerText = `${km}km`;
      }
    });
  }
}

function switchToImperial(ev, imperial) {
  const btn = ev.target;
  btn.classList.add('active');
  imperial.classList.remove('active');

  const {
    allTemps,
    allSpeeds,
    allDistances,
  } = getSwitchableMeasurements();

  convertTemps(allTemps, 'imperial');
  convertSpeeds(allSpeeds, 'imperial');
  convertDistances(allDistances, 'imperial');
}

function switchToMetric(ev, metric) {
  const btn = ev.target;
  btn.classList.add('active');
  metric.classList.remove('active');

  const {
    allTemps,
    allSpeeds,
    allDistances,
  } = getSwitchableMeasurements();

  convertTemps(allTemps, 'metric');
  convertSpeeds(allSpeeds, 'metric');
  convertDistances(allDistances, 'metric');
}

function imperialMetricSwitch(ev, imperial, metric) {
  if (ev.target.className === ('metric-btn')) {
    _timeline__WEBPACK_IMPORTED_MODULE_0__.state.currentMeasurementSystem = 'imperial';
    switchToImperial(ev, imperial);
  } else if (ev.target.className === 'imperial-btn') {
    _timeline__WEBPACK_IMPORTED_MODULE_0__.state.currentMeasurementSystem = 'metric';
    switchToMetric(ev, metric);
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wZXJpYWxfbWV0cmljX3N3aXRjaC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQSxpQ0FBaUMsNENBQUs7QUFDdEM7QUFDQTtBQUNBLGtDQUFrQyw0Q0FBSztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEVBQUUsRUFBRSxHQUFHO0FBQ2pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFLEVBQUUsR0FBRztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsR0FBRztBQUM5QixLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEdBQUc7QUFDOUIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQyxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07QUFDbEM7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsR0FBRztBQUMvQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEdBQUc7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQSxJQUFJLDRDQUFLO0FBQ1Q7QUFDQSxJQUFJO0FBQ0osSUFBSSw0Q0FBSztBQUNUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0RldmVsb3BtZW50Ly4vc3JjL2NvbXBvbmVudHMvaW1wZXJpYWxfbWV0cmljX3N3aXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vdGltZWxpbmUnO1xuXG5mdW5jdGlvbiBnZXRTd2l0Y2hhYmxlTWVhc3VyZW1lbnRzKCkge1xuICBjb25zdCBkaXNwbGF5ZWRUZW1wcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5LWNhcmQgcFtjbGFzcyo9XCJ0ZW1wXCJdJykpO1xuICBjb25zdCBzaGFkb3dUZW1wcyA9IEFycmF5LmZyb20oc3RhdGUudGltZWxpbmVzWzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BbY2xhc3MqPVwidGVtcFwiXScpKTtcbiAgY29uc3QgYWxsVGVtcHMgPSBbLi4uZGlzcGxheWVkVGVtcHMsIC4uLnNoYWRvd1RlbXBzXTtcbiAgY29uc3QgZGlzcGxheWVkU3BlZWRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXktY2FyZCBwW2NsYXNzKj1cIndpbmRcIl0nKSk7XG4gIGNvbnN0IHNoYWRvd1NwZWVkcyA9IEFycmF5LmZyb20oc3RhdGUudGltZWxpbmVzWzNdLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BbY2xhc3MqPVwid2luZFwiXScpKTtcbiAgY29uc3QgYWxsU3BlZWRzID0gWy4uLmRpc3BsYXllZFNwZWVkcywgLi4uc2hhZG93U3BlZWRzXTtcblxuICBjb25zdCBwcmVjID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcucHJlY2lwaXRhdGlvbicpO1xuICBjb25zdCB2aXMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmlsaXR5Jyk7XG4gIGNvbnN0IGFsbERpc3RhbmNlcyA9IFtwcmVjLCB2aXNdO1xuXG4gIHJldHVybiB7XG4gICAgYWxsVGVtcHMsXG4gICAgYWxsU3BlZWRzLFxuICAgIGFsbERpc3RhbmNlcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRlbXBzKHRlbXBzLCB0bykge1xuICBpZiAodG8gPT09ICdpbXBlcmlhbCcpIHtcbiAgICB0ZW1wcy5mb3JFYWNoKCh0ZW1wKSA9PiB7XG4gICAgICBjb25zdCBjID0gdGVtcC5pbm5lclRleHQuc3BsaXQoJ8KwJylbMF07XG4gICAgICBjb25zdCBmbSA9ICfCsEYnO1xuICAgICAgY29uc3QgcGFyc2VkQyA9IHBhcnNlRmxvYXQoYywgMTApO1xuICAgICAgY29uc3QgZiA9IE1hdGgucm91bmQoKChwYXJzZWRDICogKDkgLyA1KSkgKyAzMikgKiAxMCkgLyAxMDtcbiAgICAgIHRlbXAuaW5uZXJUZXh0ID0gYCR7Zn0ke2ZtfWA7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRvID09PSAnbWV0cmljJykge1xuICAgIHRlbXBzLmZvckVhY2goKHRlbXApID0+IHtcbiAgICAgIGNvbnN0IGYgPSB0ZW1wLmlubmVyVGV4dC5zcGxpdCgnwrAnKVswXTtcbiAgICAgIGNvbnN0IGNtID0gJ8KwQyc7XG4gICAgICBjb25zdCBwYXJzZWRGID0gcGFyc2VGbG9hdChmLCAxMCk7XG4gICAgICBjb25zdCBjID0gTWF0aC5yb3VuZCgoKHBhcnNlZEYgLSAzMikgKiAoNSAvIDkpKSAqIDEwKSAvIDEwO1xuICAgICAgdGVtcC5pbm5lclRleHQgPSBgJHtjfSR7Y219YDtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3BlZWRzKHNwZWVkcywgdG8pIHtcbiAgaWYgKHRvID09PSAnaW1wZXJpYWwnKSB7XG4gICAgc3BlZWRzLmZvckVhY2goKHNwZWVkKSA9PiB7XG4gICAgICBjb25zdCBzID0gc3BlZWQuaW5uZXJUZXh0LnNwbGl0KCdrJylbMF07XG4gICAgICBjb25zdCBwYXJzZWRTID0gcGFyc2VGbG9hdChzLCAxMCk7XG4gICAgICBjb25zdCBzcCA9IE1hdGgucm91bmQoKHBhcnNlZFMgLyAxLjYwOTM0NCkgKiAxMCkgLyAxMDtcbiAgICAgIHNwZWVkLmlubmVyVGV4dCA9IGAke3NwfW1waGBcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0byA9PT0gJ21ldHJpYycpIHtcbiAgICBzcGVlZHMuZm9yRWFjaCgoc3BlZWQpID0+IHtcbiAgICAgIGNvbnN0IHMgPSBzcGVlZC5pbm5lclRleHQuc3BsaXQoJ20nKVswXTtcbiAgICAgIGNvbnN0IHBhcnNlZFMgPSBwYXJzZUZsb2F0KHMsIDEwKTtcbiAgICAgIGNvbnN0IHNwID0gTWF0aC5yb3VuZCgocGFyc2VkUyAqIDEuNjA5MzQ0KSAqIDEwKSAvIDEwO1xuICAgICAgc3BlZWQuaW5uZXJUZXh0ID0gYCR7c3B9a3BoYDtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGlzdGFuY2VzKGRpc3RhbmNlcywgdG8pIHtcbiAgaWYgKHRvID09PSAnaW1wZXJpYWwnKSB7XG4gICAgZGlzdGFuY2VzLmZvckVhY2goKGRpc3QpID0+IHtcbiAgICAgIGlmIChkaXN0LmlubmVyVGV4dC5pbmNsdWRlcygnbW0nKSkge1xuICAgICAgICBjb25zdCBkID0gZGlzdC5pbm5lclRleHQuc3BsaXQoJ20nKVswXTtcbiAgICAgICAgY29uc3QgcGFyc2VkRCA9IHBhcnNlRmxvYXQoZCwgMTApO1xuICAgICAgICBjb25zdCBpbmNoZXMgPSBNYXRoLnJvdW5kKChwYXJzZWREIC8gMjUuNCkgKiAxMCkgLyAxMDtcbiAgICAgICAgZGlzdC5pbm5lclRleHQgPSBgJHtpbmNoZXN9aW5jaGVzYDtcbiAgICAgIH0gZWxzZSBpZiAoZGlzdC5pbm5lclRleHQuaW5jbHVkZXMoJ2ttJykpIHtcbiAgICAgICAgY29uc3QgZCA9IGRpc3QuaW5uZXJUZXh0LnNwbGl0KCdrJylbMF07XG4gICAgICAgIGNvbnN0IHBhcnNlZEQgPSBwYXJzZUZsb2F0KGQsIDEwKTtcbiAgICAgICAgY29uc3QgbWlsZXMgPSBNYXRoLnJvdW5kKChwYXJzZWREIC8gMS42MDkzNDQpICogMTApIC8gMTA7XG4gICAgICAgIGRpc3QuaW5uZXJUZXh0ID0gYCR7bWlsZXN9bWlsZXNgO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHRvID09PSAnbWV0cmljJykge1xuICAgIGRpc3RhbmNlcy5mb3JFYWNoKChkaXN0KSA9PiB7XG4gICAgICBpZiAoZGlzdC5pbm5lclRleHQuaW5jbHVkZXMoJ2luY2hlcycpKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkaXN0LmlubmVyVGV4dC5zcGxpdCgnbScpWzBdO1xuICAgICAgICBjb25zdCBwYXJzZWREID0gcGFyc2VGbG9hdChkLCAxMCk7XG4gICAgICAgIGNvbnN0IG1tID0gTWF0aC5yb3VuZCgocGFyc2VkRCAqIDI1LjQpICogMTApIC8gMTA7XG4gICAgICAgIGRpc3QuaW5uZXJUZXh0ID0gYCR7bW19bW1gO1xuICAgICAgfSBlbHNlIGlmIChkaXN0LmlubmVyVGV4dC5pbmNsdWRlcygnbWlsZXMnKSkge1xuICAgICAgICBjb25zdCBkID0gZGlzdC5pbm5lclRleHQuc3BsaXQoJ20nKVswXTtcbiAgICAgICAgY29uc3QgcGFyc2VkRCA9IHBhcnNlRmxvYXQoZCwgMTApO1xuICAgICAgICBjb25zdCBrbSA9IE1hdGgucm91bmQoKHBhcnNlZEQgKiAxLjYwOTM0NCkgKiAxMCkgLyAxMDtcbiAgICAgICAgZGlzdC5pbm5lclRleHQgPSBgJHtrbX1rbWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9JbXBlcmlhbChldiwgaW1wZXJpYWwpIHtcbiAgY29uc3QgYnRuID0gZXYudGFyZ2V0O1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGltcGVyaWFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnN0IHtcbiAgICBhbGxUZW1wcyxcbiAgICBhbGxTcGVlZHMsXG4gICAgYWxsRGlzdGFuY2VzLFxuICB9ID0gZ2V0U3dpdGNoYWJsZU1lYXN1cmVtZW50cygpO1xuXG4gIGNvbnZlcnRUZW1wcyhhbGxUZW1wcywgJ2ltcGVyaWFsJyk7XG4gIGNvbnZlcnRTcGVlZHMoYWxsU3BlZWRzLCAnaW1wZXJpYWwnKTtcbiAgY29udmVydERpc3RhbmNlcyhhbGxEaXN0YW5jZXMsICdpbXBlcmlhbCcpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUb01ldHJpYyhldiwgbWV0cmljKSB7XG4gIGNvbnN0IGJ0biA9IGV2LnRhcmdldDtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBtZXRyaWMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29uc3Qge1xuICAgIGFsbFRlbXBzLFxuICAgIGFsbFNwZWVkcyxcbiAgICBhbGxEaXN0YW5jZXMsXG4gIH0gPSBnZXRTd2l0Y2hhYmxlTWVhc3VyZW1lbnRzKCk7XG5cbiAgY29udmVydFRlbXBzKGFsbFRlbXBzLCAnbWV0cmljJyk7XG4gIGNvbnZlcnRTcGVlZHMoYWxsU3BlZWRzLCAnbWV0cmljJyk7XG4gIGNvbnZlcnREaXN0YW5jZXMoYWxsRGlzdGFuY2VzLCAnbWV0cmljJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltcGVyaWFsTWV0cmljU3dpdGNoKGV2LCBpbXBlcmlhbCwgbWV0cmljKSB7XG4gIGlmIChldi50YXJnZXQuY2xhc3NOYW1lID09PSAoJ21ldHJpYy1idG4nKSkge1xuICAgIHN0YXRlLmN1cnJlbnRNZWFzdXJlbWVudFN5c3RlbSA9ICdpbXBlcmlhbCc7XG4gICAgc3dpdGNoVG9JbXBlcmlhbChldiwgaW1wZXJpYWwpO1xuICB9IGVsc2UgaWYgKGV2LnRhcmdldC5jbGFzc05hbWUgPT09ICdpbXBlcmlhbC1idG4nKSB7XG4gICAgc3RhdGUuY3VycmVudE1lYXN1cmVtZW50U3lzdGVtID0gJ21ldHJpYyc7XG4gICAgc3dpdGNoVG9NZXRyaWMoZXYsIG1ldHJpYyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==