import { state } from './timeline';

function getSwitchableMeasurements() {
  const displayedTemps = Array.from(document.body.querySelectorAll('.day-card p[class*="temp"]'));
  const shadowTemps = Array.from(state.timelines[1].querySelectorAll('p[class*="temp"]'));
  const allTemps = [...displayedTemps, ...shadowTemps];
  const displayedSpeeds = Array.from(document.body.querySelectorAll('.day-card p[class*="wind"]'));
  const shadowSpeeds = Array.from(state.timelines[3]).slice(0, 1);
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

function switchToImperial(ev, imperial) {
  const btn = ev.target;
  btn.classList.add('active');
  imperial.classList.remove('active');

  const {
    allTemps,
    allSpeeds,
    allDistances
  } = getSwitchableMeasurements();

  convertTemps(allTemps, 'imperial');
}

function switchToMetric(ev, metric) {
  const btn = ev.target;
  btn.classList.add('active');
  metric.classList.remove('active');

  const {
    allTemps,
    allSpeeds,
    allDistances
  } = getSwitchableMeasurements();

  convertTemps(allTemps, 'metric');
}

export default function imperialMetricSwitch(ev, imperial, metric) {
  if (ev.target.className === ('metric-btn')) {
    switchToImperial(ev, imperial);
  } else if (ev.target.className === 'imperial-btn') {
    switchToMetric(ev, metric);
  }
}
