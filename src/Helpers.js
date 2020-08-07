const toFahrenheit = (K) => {
  return Math.round((K - 273.15) * (9 / 5) + 32);
};

const toCelsius = (K) => {
  return Math.round(K - 273.15);
};

export const convertTemps = (obj, type) => {
  const newTemps = {};
  for (const key in obj) {
    if (type === 'c') {
      newTemps[key] = toCelsius(obj[key]);
    } else {
      newTemps[key] = toFahrenheit(obj[key]);
    }
  }
  return newTemps;
};

export const makeDate = () => {
  const today = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${months[
    today.getMonth()
  ]} ${today.getDate()}, ${today.getFullYear()} `;
};

export const getIconClass = (icon) => {
  const classes = {
    '01d': 'fas fa-sun sun',
    '01n': 'fas fa-moon moon',
    '02d': 'fas fa-cloud-sun rain-sun',
    '02n': 'fas fa-cloud-moon rain-moon',
    '03d': 'fas fa-cloud day',
    '03n': 'fas fa-cloud night',
    '04d': 'fas fa-cloud-meatball day',
    '04n': 'fas fa-cloud-meatball night',
    '09d': 'fas fa-cloud-showers-heavy day',
    '09n': 'fas fa-cloud-showers-heavy night',
    '10d': 'fas fa-cloud-sun-rain rain-sun',
    '10n': 'fas fa-cloud-moon-rain rain-moon',
    '11d': 'fas fa-bolt bolt-day',
    '11n': 'fas fa-bolt bolt-night',
    '13d': 'far fa-snowflake day',
    '13n': 'far fa-snowflake night',
    '50d': 'fas fa-smog day',
    '50n': 'fas fa-smog night',
  };
  return classes[icon];
};
