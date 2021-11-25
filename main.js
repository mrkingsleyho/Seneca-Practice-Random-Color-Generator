const firstNumber = Math.floor(Math.random() * 255);
const secondNumber = Math.floor(Math.random() * 255);
const thirdNumber = Math.floor(Math.random() * 255);
const buttonSelector = document.getElementById('primary-button'); 

//  function randomBackgroundColorGenerator () {
//  buttonSelector.addEventListener('click', function () {
//    document.body.style.backgroundColor = 'green';
//  });
// };

// randomBackgroundColorGenerator();

function randomBackgroundColorGenerator () {
  buttonSelector.addEventListener('click', function () {
    document.body.style.backgroundColor = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber}`;
  });
 };
 
 randomBackgroundColorGenerator();


