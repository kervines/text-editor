const formContent = document.querySelector('#form-content');
const textContent = document.querySelector('#input-text');
// Buttons
const btnBold = document.querySelector('.bold');
const btnItalic = document.querySelector('.italic');
const btnUnderline = document.querySelector('.underline');
const buttons = document.querySelectorAll('.edit-container button');
// FontSize
const fontSizeSelect = document.querySelector('#font-size');
// FontFamily
const fontFamilySelect = document.querySelector('#font-family');
// MainFooter
const mainFooter = document.querySelector('#main-footer');

// main
const textConfigUpdate = JSON.parse(localStorage.getItem('text')) ?? '';
textContent.innerHTML = `<span class='font-size-${
  textConfigUpdate.fontSize
} font-family-${textConfigUpdate.fontFamily}'> ${
  textConfigUpdate.content ?? ''
} </span>`;

mainFooter.innerHTML = `<span>${textConfigUpdate.fontFamily}</span> <span>${textConfigUpdate.fontSize}</span>`;

const textConfig = {
  content: textConfigUpdate.content ?? '',
  fontSize: textConfigUpdate.fontSize ?? '',
  fontColor: textConfigUpdate.fontColor ?? '',
  fontFamily: textConfigUpdate.fontFamily ?? '',
};

const handleKeyup = (e) => {
  textConfig.content = textContent.innerText;
  localStorage.setItem('text', JSON.stringify(textConfig));
};
textContent.addEventListener('keyup', handleKeyup);

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    document.execCommand(e.target.dataset.btn);

    const text = textContent.innerHTML;
    const regexp = /<span[^>]*>(.*?)<\/span>/gi;
    const newText = text.replace(regexp, '$1');

    textConfig.content = `${newText}`;
    localStorage.setItem('text', JSON.stringify(textConfig));
  });
});

const handleFontSize = () => {
  textConfig.fontSize = fontSizeSelect.value;
  localStorage.setItem('text', JSON.stringify(textConfig));
  location.reload();
};
fontSizeSelect.addEventListener('change', handleFontSize);

const handleFontFamily = () => {
  textConfig.fontFamily = fontFamilySelect.value;
  localStorage.setItem('text', JSON.stringify(textConfig));
  location.reload();
};
fontFamilySelect.addEventListener('change', handleFontFamily);
