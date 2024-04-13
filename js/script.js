const formContent = document.querySelector('#form-content');
const textContent = document.querySelector('#input-text');
// Buttons
const btnBold = document.querySelector('.bold');
const btnItalic = document.querySelector('.italic');
const btnUnderline = document.querySelector('.underline');

const buttons = document.querySelectorAll('.edit-container button');

const textConfigUpdate = JSON.parse(localStorage.getItem('text')) ?? '';
textContent.innerHTML = textConfigUpdate.content ?? '';

const textConfig = {
  content: textConfigUpdate.content ?? '',
  fontWeight: textConfigUpdate.fontWeight ?? '',
  fontStyle: textConfigUpdate.fontStyle ?? '',
  fontSize: textConfigUpdate.fontSize ?? '',
  textDecoration: textConfigUpdate.textDecoration ?? '',
  fontColor: textConfigUpdate.fontColor ?? '',
};

const handleKeyup = (e) => {
  e.preventDefault();
  textConfig.content = `<span class='${textConfig.fontWeight} ${textConfig.fontStyle} ${textConfig.fontSize}'>${textContent.innerText}</span>`;
  localStorage.setItem('text', JSON.stringify(textConfig));
};
textContent.addEventListener('keyup', handleKeyup);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (textConfig[e.target.id] !== '') {
      textConfig[e.target.id] = '';
      textConfig.content = `<span class='${textConfig.fontWeight} ${textConfig.fontStyle} ${textConfig.textDecoration}'>${textContent.innerText}</span>`;
      localStorage.setItem('text', JSON.stringify(textConfig));
    } else {
      textConfig[e.target.id] = e.target.className + '-class';
      textConfig.content = `<span class='${textConfig.fontWeight} ${textConfig.fontStyle} ${textConfig.textDecoration}'>${textContent.innerText}</span>`;
      localStorage.setItem('text', JSON.stringify(textConfig));
    }
  });
});

/*
Seleçao dos elementos de texto
const handleSelection = () => {
  const selection = window.getSelection().toString();
  console.log(selection);
};
textContent.addEventListener('mouseup', handleSelection);
*/

// formContent.addEventListener('change', handleChange);
