import setValues from './card';

async function getWeather(searchValue, unit) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${unit}&appid=9cedd38e1f2be32f2b7e7e75f332758e`,
    { mode: 'cors' }
  );

  const data = await response.json();
  return data;
}

const createCard = (searchValue) => {
  const scale = document.querySelector('.toggle').id;

  getWeather(searchValue, scale).then((data) => setValues(data));
};

export { createCard };
