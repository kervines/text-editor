const formContent = document.querySelector('#form-content');
const textContent = document.querySelector('#input-text');

const textConfigUpdate = JSON.parse(localStorage.getItem('text')) ?? '';
textContent.innerHTML = textConfigUpdate.content ?? '';

const handleKeyup = (e) => {
  e.preventDefault();
  const textConfig = {
    content: `<span>${textContent.innerText}</span>`,
    fontStyle: '',
    fontSize: '',
    fontColor: '',
  };
  localStorage.setItem('text', JSON.stringify(textConfig));
};

const handleSelection = () => {
  const selection = window.getSelection().toString();
  console.log(selection);
};

textContent.addEventListener('mouseup', handleSelection);
// formContent.addEventListener('change', handleChange);
textContent.addEventListener('keyup', handleKeyup);
