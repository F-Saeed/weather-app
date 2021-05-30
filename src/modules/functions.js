import { setValues } from './card';

/* from stackoverflow */
const titleCase = (str) => {
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};

async function getWeather(searchValue, unit) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=${unit}&appid=9cedd38e1f2be32f2b7e7e75f332758e`,
    { mode: 'cors' }
  );

  const data = await response.json();
  return data;
}

const createCard = () => {
  const searchValue = document.querySelector('#search').value;
  const scale = document.querySelector('.toggle').id;

  getWeather(searchValue, scale).then((data) => setValues(data));
};

export { createCard, titleCase };
