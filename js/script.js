const formContent = document.querySelector('#form-content');
const textContent = document.querySelector('#input-text');
// Buttons
const btnBold = document.querySelector('.bold');
const btnItalic = document.querySelector('.italic');
const btnUnderline = document.querySelector('.underline');
const buttons = document.querySelectorAll('.edit-container button');

const textConfigUpdate = JSON.parse(localStorage.getItem('text')) ?? '';
textContent.innerHTML =
  `<span class='${textConfigUpdate.fontWeight} ${textConfigUpdate.fontStyle} ${textConfigUpdate.fontSize}'> ${textConfigUpdate.content} </span>` ??
  '';

const textConfig = {
  content: textConfigUpdate.content ?? '',
  fontWeight: textConfigUpdate.fontWeight ?? '',
  fontStyle: textConfigUpdate.fontStyle ?? '',
  fontSize: textConfigUpdate.fontSize ?? '',
  textDecoration: textConfigUpdate.textDecoration ?? '',
  fontColor: textConfigUpdate.fontColor ?? '',
};

const handleKeyup = (e) => {
  // textConfig.content = `<span class='${textConfig.fontWeight} ${textConfig.fontStyle} ${textConfig.fontSize}'>${textContent.innerText} </span>`;
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

// formContent.addEventListener('change', handleChange);
