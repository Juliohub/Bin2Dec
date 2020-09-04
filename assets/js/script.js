const campoBinario = document.querySelector('#binario'),
  campoResultado = document.querySelector('#resultado'),
  button = document.querySelector('.btn'),
  spanInvalido = document.querySelector('.invalido');

function binaryForDecimal(n) {
  let valorFinal = 0;
  let aoBinario = n.length - 1;

  let verificacao = true;

  for (let i = 0; i < n.length; i++) {
    if (n.substr(i, 1) !== '0' && n.substr(i, 1) !== '1' && n !== '') {
      verificacao = false;
    }

    if (verificacao) {
      if (aoBinario > -1) {
        valorFinal =
          valorFinal + Number(n.substr(i, 1) * Math.pow(2, aoBinario));
      }
      aoBinario--;
    }
  }

  if (verificacao) {
    spanInvalido.innerText = '';
    return valorFinal;
  } else {
    spanInvalido.innerText = 'Valor não permitido';
    setTimeout(() => {
      spanInvalido.innerText = '';
    }, 3000);
    return null;
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  const valorBinario = campoBinario.value;

  campoResultado.value = binaryForDecimal(valorBinario);
});
