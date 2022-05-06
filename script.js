function login() {
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
document.querySelector('#entrar').addEventListener('click', login);

function disabled() {
  const submitButton = document.querySelector('#submit-btn');
  const checkbox = document.querySelector('#agreement');

  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

document.querySelector('#agreement').addEventListener('click', disabled);

function count() {
  const tam = document.querySelector('#textarea').value.length;

  document.querySelector('#counter').innerText = 500 - tam;
}
document.querySelector('#textarea').addEventListener('input', count);

function section1() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;

  const section4 = document.querySelector('#section4');
  section4.innerHTML = `Nome: ${nome} ${sobrenome}<br>Email: ${email}<br> Casa: ${house}`;
}

function section2part2() {
  const tec = document.querySelectorAll('#section2-content input');
  const tecArray = [];
  for (let i = 0; i < tec.length; i += 1) {
    if (tec[i].checked === true) {
      tecArray.push(` ${tec[i].value}`);
    }
  }
  const section4 = document.querySelector('#section4');
  section4.innerHTML += `<br>Matérias: ${tecArray}`;
}

function section2() {
  let family;
  const familyArray = document.querySelectorAll('#section2-family input');
  for (let i = 0; i < familyArray.length; i += 1) {
    if (familyArray[i].checked === true) {
      family = familyArray[i].value;
    }
  }
  const section4 = document.querySelector('#section4');
  section4.innerHTML += `<br>Família: ${family}`;
  section2part2();
}

function section3() {
  const rate = document.querySelectorAll('#avaliacao-container input');
  let nota;
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked === true) {
      nota = rate[i].value;
    }
  }
  console.log(nota);
  const coment = document.querySelector('textarea').value;
  console.log(coment);

  const section4 = document.querySelector('#section4');
  section4.innerHTML += `<br>Avaliação: ${nota}<br>Observações: ${coment}`;
}

function funcao(element) {
  element.preventDefault();
  const section4 = document.createElement('section');
  section4.id = 'section4';
  document.querySelector('#evaluation-form').appendChild(section4);
  section1();
  section2();
  section3();
}

const btn = document.querySelector('#submit-btn');
btn.addEventListener('click', funcao);
