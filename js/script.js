const formContent = document.querySelector('#form-content');
const textContent = document.querySelector('#text-content');

const textConfigUpdate = JSON.parse(localStorage.getItem('text')) ?? '';

textConfigUpdate.content?.forEach((text) => {
  textContent.value += `${text} `;
});

const handleChange = (e) => {
  e.preventDefault();

  const textConfig = {
    content: textContent.value.split(' '),
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
formContent.addEventListener('change', handleChange);
