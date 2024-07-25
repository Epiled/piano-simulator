const btnChangeColor = document.querySelector('[data-changeColor]');
const iptsChangeColor = document.querySelectorAll('[data-changeColorIpt]');
const piano = document.querySelector('[data-piano]');
const menuColor = document.querySelector('[data-menu]')

const colorSchemas = {
  default: {
    piano: '#000',
    background: '#e3f2fd',
    text: '#b2b2b2',
  },
  green: {
    piano: '#005f08',
    background: 'linear-gradient(160deg, rgb(100 230 122), rgb(251 67 159))',
    text: '#fff',
  },
  pink: {
    piano: '#90006f',
    background: 'linear-gradient(120deg, rgb(223 159 255), rgb(47 65 255))',
    text: '#fff',
  }
}

btnChangeColor.addEventListener('click', () => {

  iptsChangeColor.forEach(ipt => {
    ipt.addEventListener('click', (e) => {
      document.body.style.background = colorSchemas[e.target.value].background;
      menuColor.style.color = colorSchemas[e.target.value].text;
      piano.style.backgroundColor = colorSchemas[e.target.value].piano;
      btnChangeColor.style.borderColor = colorSchemas[e.target.value].piano;
    })
    ipt.dataset.changecoloript = !(ipt.dataset.changecoloript == "true");
  });
})

