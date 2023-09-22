function getSunMoonIcon() {
  const sunMoonIconOuter = document.createElement('div');
  sunMoonIconOuter.className = 'sun-moon-icon-outer';

  const sunMoonIconInner = document.createElement('div');
  sunMoonIconInner.className = 'sun-moon-icon-inner';

  const sunIconBg = document.createElement('div');
  sunIconBg.className = 'sun-bg';

  const moonIconBg = document.createElement('div');
  moonIconBg.className = 'moon-bg';

  const sunMoonIcon = new Image();
  sunMoonIcon.className = 'sun-moon-icon';
  sunMoonIcon.src = '../assets/imgs/sun-moon.svg';
  sunMoonIcon.style.height = '120px';
  sunMoonIcon.style.width = '120px';

  sunMoonIconInner.appendChild(sunIconBg);
  sunMoonIconInner.appendChild(moonIconBg);
  sunMoonIconInner.appendChild(sunMoonIcon);
  sunMoonIconOuter.appendChild(sunMoonIconInner);

  return sunMoonIconOuter;
}

function getSun() {
  const sunrise = document.createElement('p');
  sunrise.className = 'sunrise';
  const sunset = document.createElement('p');
  sunset.className = 'sunset';
  const sunlightHours = document.createElement('p');
  sunlightHours.className = 'sunlight-hours';

  return {
    sunrise,
    sunset,
    sunlightHours,
  };
}

function getMoon() {
  const moonrise = document.createElement('p');
  moonrise.className = 'moonrise';
  const moonset = document.createElement('p');
  moonset.className = 'moonset';
  const moonPhase = document.createElement('p');
  moonPhase.className = 'moon-phase';

  return {
    moonrise,
    moonset,
    moonPhase,
  };
}

function convertToMilitaryTime(time) {
  if (time === 'No moonset') {
    return 'None';
  }
  let timeNum = parseInt(time.replace(/\D/g, ''), 10);
  let formattedTime = '';
  if (time.includes('PM')) {
    timeNum += 1200;
    const timeStr = String(timeNum);
    formattedTime = `${timeStr.slice(0, 2)}:${timeStr.slice(2)}`;
  } else if (timeNum >= 1000) {
    const timeStr = String(timeNum);
    formattedTime = `${timeStr.slice(0, 1)}:${timeStr.slice(1)}`;
  } else {
    const timeStr = String(timeNum);
    formattedTime = `0${timeStr.slice(0, 1)}:${timeStr.slice(1)}`;
  }

  return formattedTime;
}

function calculateSunlightHours(sunrise, sunset) {
  const formattedSunSetTime = convertToMilitaryTime(sunset);
  const sunRiseTime = sunrise.split(' ')[0];
  const sunSetDate = new Date(`2000-01-01T${formattedSunSetTime}:00`);
  const sunRiseDate = new Date(`2000-01-01T${sunRiseTime}:00`);
  const diffInMilliseconds = sunSetDate - sunRiseDate;
  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const remainingMinutes = diffInMinutes % 60;

  const result = `Daylight: ${diffInHours}hrs ${remainingMinutes}mins`;

  return result;
}

export default function AstroCard() {
  const astroCard = document.createElement('div');
  astroCard.className = 'astro-card';

  const { sunrise, sunset, sunlightHours } = getSun();
  const { moonrise, moonset, moonPhase } = getMoon();

  const sunContainer = document.createElement('div');
  sunContainer.className = 'sun-container';
  sunContainer.appendChild(sunlightHours);
  sunContainer.appendChild(sunrise);
  sunContainer.appendChild(sunset);
  sunContainer.appendChild(getSunMoonIcon());

  const moonContainer = document.createElement('div');
  moonContainer.className = 'moon-container';
  moonContainer.appendChild(moonrise);
  moonContainer.appendChild(moonset);
  moonContainer.appendChild(moonPhase);

  astroCard.appendChild(sunContainer);
  astroCard.appendChild(moonContainer);

  astroCard.addEventListener('astroApiResponse', (ev) => {
    const { astro } = ev.detail;

    sunrise.innerText = `Sunrise: ${convertToMilitaryTime(astro.sunrise)}`;
    sunset.innerText = `Sunset: ${convertToMilitaryTime(astro.sunset)}`;
    sunlightHours.innerText = calculateSunlightHours(astro.sunrise, astro.sunset);

    moonrise.innerText = `Moonrise: ${convertToMilitaryTime(astro.moonrise)}`;
    moonset.innerText = `Moonset: ${convertToMilitaryTime(astro.moonset)}`;
    moonPhase.innerText = `Phase: ${astro.moon_phase}`;
  });

  return astroCard;
}
