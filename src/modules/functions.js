import setValues from './card.js';

/* Fetch weather data from openweather API */
async function getWeather(searchValue, unit) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${unit}&appid=9cedd38e1f2be32f2b7e7e75f332758e`,
    { mode: 'cors' }
  );

  const data = await response.json();
  return data;
}

/* Update weather card using the new fetched data */
const updateCard = async (searchValue) => {
  const scale = document.querySelector('.toggle').id;

  const data = await getWeather(searchValue, scale)
  setValues(data);
  return;
};

export default updateCard;
