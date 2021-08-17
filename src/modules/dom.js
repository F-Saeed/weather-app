import updateCard from './functions';

/* Add weather data to card */
const addWeather = (event) => {
  event.preventDefault();
  const searchValue = document.querySelector('#search').value;

  updateCard(searchValue);
};

const resizeCheck = () => {
  const skyCondition = document.querySelector('#sky-condition > h1');
  const skyConditionFirstWordLength = skyCondition.innerText.split(' ')[0]
    .length;

  if (skyConditionFirstWordLength < 8 && screen.width > 570)
    skyCondition.style.fontSize = '3.5rem';
  else if (skyConditionFirstWordLength > 8 && screen.width > 570)
    skyCondition.style.fontSize = '2.4rem';
  else if (skyConditionFirstWordLength <= 8 && screen.width < 570)
    skyCondition.style.fontSize = '2rem';
  else skyCondition.style.fontSize = '1.4rem';
};

export { addWeather, resizeCheck };
