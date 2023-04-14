const button = document.querySelector('button');

button.addEventListener('click', () => {
  button.classList.add('spin-once');


  setTimeout(() => {
    button.classList.remove('spin-once');
  }, 1000);
});


const input = document.querySelector('.change__input')

const upperCase = document.querySelector('.UpperCase')

function UpperCase(){
    const text = input.value;
    const transformedText = text.toUpperCase();

    upperCase.textContent = transformedText;
}

function Lowercase(){
    const text = input.value;
    const transformedText = text.toLowerCase();

    upperCase.textContent = transformedText;
}
//
