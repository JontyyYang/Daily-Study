var inputElement = document.querySelector('#input');
inputElement.addEventListener('input', function () {
  var startTime = 0;
  var date = +new Date() - startTime;
  console.log(date, 'jontyy');
  startTime = date;
});
