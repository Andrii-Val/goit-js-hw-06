
const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const enteredValue = input.value;
  const expectedLength = input.dataset.length;

  if (enteredValue.length === Number(expectedLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});