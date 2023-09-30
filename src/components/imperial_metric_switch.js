import { state } from './timeline';

function getSwitchableMeasurements() {
  const displayedTemps = Array.from(document.body.querySelectorAll('.day-card p[class*="temp"]'));
  const shadowTemps = Array.from(state.timelines[1].querySelectorAll('p[class*="temp"]'));
  const allTemps = [...displayedTemps, ...shadowTemps];
  const displayedSpeeds = Array.from(document.body.querySelectorAll('.day-card p[class*="wind"]'));
  const shadowSpeeds = Array.from(state.timelines[3].querySelectorAll('p[class*="wind"]'));
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

export default function imperialMetricSwitch(ev, imperial, metric) {
  if (ev.target.className === ('metric-btn')) {
    state.currentMeasurementSystem = 'imperial';
    switchToImperial(ev, imperial);
  } else if (ev.target.className === 'imperial-btn') {
    state.currentMeasurementSystem = 'metric';
    switchToMetric(ev, metric);
  }
}
