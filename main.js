function randomNumberGenerator () {
  const firstNumber = Math.floor(Math.random() * 256);
  const secondNumber = Math.floor(Math.random() * 256);
  const thirdNumber = Math.floor(Math.random() * 256);
  const threeNumbers = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
  return threeNumbers;
}

randomNumberGenerator();

function backgroundColor () {
  const buttonSelector = document.getElementById('btn');
  buttonSelector.addEventListener('click', function () {
    document.body.style.backgroundColor = randomNumberGenerator();
  });
}

backgroundColor();

