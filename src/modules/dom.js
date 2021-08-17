import updateCard from './functions';

/* Add weather data to card */
const addWeather = (event) => {
  event.preventDefault();
  const searchValue = document.querySelector('#search').value;

  updateCard(searchValue);
};

const resizeCheck = () => {
  const skyCondition = document.querySelector('#sky-condition > h1');
  const skyConditionFirstWordLength = skyCondition.innerText;
  console.log(skyConditionFirstWordLength);
};

export { addWeather, resizeCheck };
