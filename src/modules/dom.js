import { createCard } from './functions';

const addWeather = (searchForm) => (event) => {
  event.preventDefault();
  createCard();

  searchForm.reset();
};

export { addWeather };
