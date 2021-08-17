/* from stackoverflow */
const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};

/* Select Elements from the weather card */
const selectElements = () => {
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

/* Update weather card elements */
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
    data.main.temp,
    10
  )} <span class="toggle" id="metric">${currentUnit.innerText}</span>`;

  location.innerHTML = `${data.name}, ${data.sys.country}`;

  skyCondition.innerHTML = titleCase(data.weather[0].description);

  feelsTemp.innerHTML = `${parseInt(data.main.feels_like, 10)}°`;

  windSpeed.innerHTML = `${data.wind.speed} mph`;

  humidityPercentage.innerHTML = `${parseInt(data.main.humidity, 10)}%`;
};

const setValues = (data) => {
  if (data.cod !== 200) throw new Error(data.message);

  const currentValues = selectElements();
  appendElements(currentValues, data);
};

export default setValues;
