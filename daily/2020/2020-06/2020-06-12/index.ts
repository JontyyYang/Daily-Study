const inputElement = document.querySelector('#input') as HTMLInputElement;

inputElement.addEventListener('input', () => {
  let startTime = 0;
  const date = +new Date() - startTime;
  console.log(date, 'jontyy');
  startTime = date;
});
