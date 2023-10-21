var imgAmarelo = "robotron-amarelo.png";
var imgRosa = "robotron-rosa.png";
var imgBranco = "robotron-branco.png";
var imgPreto = "robotron-preto.png";
var imgAzul = "robotron-azul.png";
var imgVerme = "robotron-vermelho.png"


function myFunction() {
    document.getElementById("myImage").src= imgAzul;
    let cor = imgAzul;
    imgAzul = imgRosa;
    imgRosa = imgVerme;
    imgVerme = imgPreto;
    imgPreto = imgBranco;
    imgBranco = imgAmarelo
    imgAmarelo = cor;
  }

  function voltaCor() {
    let volta = myFunction();
  }


const properties = document.querySelectorAll('.property');

properties.forEach(property => {
  const decrementButton = property.querySelector('.robu');
  const incrementButton = property.querySelector('.geral');
  const valueElement = property.querySelector('.value');

  let valor = 0;

  decrementButton.addEventListener('click', () => {
    if (valor > 0) {
      valor--;
      valueElement.textContent = valor;
    }
  });

  incrementButton.addEventListener('click', () => {
    if (valor < 10) {
      valor++;
      valueElement.textContent = valor;
    }
  });
});