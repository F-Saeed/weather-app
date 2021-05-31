import { createCard } from './functions';

const addWeather = (event) => {
  const searchValue = document.querySelector('#search').value;

  event.preventDefault();
  createCard(searchValue);
};

export { addWeather, createCard };
