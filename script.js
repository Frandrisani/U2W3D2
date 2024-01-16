// PRIMO ESERCIZIO
function salvaValore() {
  let nome = document.getElementById("nome").value;
  localStorage.setItem("nomeSalvato", nome);
  mostraValoreSalvato();
}

// Funzione per rimuovere il valore da localStorage
function rimuoviValore() {
  localStorage.removeItem("nomeSalvato");
  mostraValoreSalvato();
}

function mostraValoreSalvato() {
  var valoreSalvato = localStorage.getItem("nomeSalvato");
  var elementoValoreSalvato = document.getElementById("valoreSalvato");
  if (valoreSalvato) {
    elementoValoreSalvato.innerHTML = "<strong>" + valoreSalvato + "</strong>";
  } else {
    elementoValoreSalvato.innerHTML = "";
  }
}

mostraValoreSalvato();

// SECONDO ESERCIZIO
let secondi = 0;
const div = document.getElementById("time");
const p = document.createElement("p");

function timer() {
  p.innerHTML = `${secondi}`;
  div.innerHTML = "";
  div.appendChild(p);
  secondi++;
}

timer();

const intervallo = setInterval(timer, 1000);
