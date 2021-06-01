import setValues from './card';

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
const updateCard = (searchValue) => {
  const scale = document.querySelector('.toggle').id;

  getWeather(searchValue, scale).then((data) => setValues(data));
};

export default updateCard;
