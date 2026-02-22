const firstInput = document.querySelector('#FirstInput');
const seconInput = document.querySelector('#SecondInput');
const result = document.querySelector('#result');

document.querySelector('#addBtn').addEventListener('click', () => {
  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(seconInput.value);
  result.textContent = firstNumber + secondNumber;
});
document.querySelector('#subtractBtn').addEventListener('click', () => {
  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(seconInput.value);

  result.textContent = firstNumber - secondNumber;
});
document.querySelector('#multiplyBtn').addEventListener('click', () => {
  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(seconInput.value);

  result.textContent = firstNumber * secondNumber;
});
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modalBox');
document.querySelector('#divisionBtn').addEventListener('click', () => {
  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(seconInput.value);
  if (secondNumber === 0) {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  } else {
    result.textContent = firstNumber / secondNumber;
  }
});
const closeBtn = document.getElementById('closemodalBtn');
closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});
