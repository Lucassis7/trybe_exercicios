const buttonSend = document.querySelector('#btn-send');
const inputField = document.querySelectorAll('input');
const buttonErase = document.querySelector('#btn-erase');

buttonSend.addEventListener('click', (event) => {
  const inputCheck = document.querySelector('#input-agree-2');
  if (inputCheck.checked === false) {
    event.preventDefault();
  }
})

function clearField() {
  for (let index = 0; index < inputField.length; index += 1) {
    inputField[index].value = '';
    inputField[index].checked = false;
    document.getElementsByTagName('textarea')[0].value = '';
  }
}

buttonErase.addEventListener('click', clearField);