import { titleCase } from './functions';

const createElements = () => {
  const temperature = document.querySelector('#temp > h1');
  const currentUnit = document.querySelector('.toggle');
  const location = document.querySelector('#location');
  const skyCondition = document.querySelector('#sky-condition > h1');
  const feelsTemp = document.querySelector('#feels > p');
  const windSpeed = document.querySelector('#wind > p');
  const humidityPercentage = document.querySelector('#humidity > p');

  return {
    temperature,
    currentUnit,
    location,
    skyCondition,
    feelsTemp,
    windSpeed,
    humidityPercentage,
  };
};

const appendElements = (
  {
    temperature,
    currentUnit,
    location,
    skyCondition,
    feelsTemp,
    windSpeed,
    humidityPercentage,
  },
  data
) => {
  temperature.innerHTML = `${parseInt(
    data.main.temp
  )} <span class="toggle" id="metric">${currentUnit.innerText}</span>`;

  location.innerHTML = `${data.name}, ${data.sys.country}`;

  skyCondition.innerHTML = titleCase(data.weather[0].description);

  feelsTemp.innerHTML = `${parseInt(data.main.feels_like)}°`;

  windSpeed.innerHTML = `${parseFloat(data.wind.speed)} mph`;

  humidityPercentage.innerHTML = `${parseInt(data.main.humidity)}%`;
};

const setValues = (data) => {
  if (data.cod !== 200) throw new Error(data.message);

  document.querySelector('.card').classList.remove('hidden');

  const currentValues = createElements();
  appendElements(currentValues, data);
};

export { createElements, appendElements, setValues };
