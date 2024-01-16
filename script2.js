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
