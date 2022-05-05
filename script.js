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
  const tam = document.querySelector('#comentario').value.length;

  document.querySelector('#count').innerText = 500 - tam;
}

document.querySelector('#comentario').addEventListener('input', count)
