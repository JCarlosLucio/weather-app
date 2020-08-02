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
