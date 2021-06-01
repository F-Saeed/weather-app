import updateCard from './functions';

/* Add weather data to card */
const addWeather = (event) => {
  event.preventDefault();
  const searchValue = document.querySelector('#search').value;

  updateCard(searchValue);
};

export default addWeather;
