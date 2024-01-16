//------------------------ PRIMO ESERCIZIO
const emailInput = document.getElementById("Email");
const PasswordInput = document.getElementById("Password");
const buttonSave = document.getElementsByClassName("btn-success")[0];
const buttonReset = document.getElementsByClassName("btn-danger")[0];
const paragrafoOutput = document.getElementById("datiSalvati");

const isInputFull = function () {
  if (emailInput.value.length > 0 && PasswordInput.value.length > 0) {
    buttonSave.classList.remove("disabled");
  } else {
    buttonSave.classList.add("disabled");
  }
};
isInputFull();
const controllo = setInterval(isInputFull, 100);

buttonSave.addEventListener("click", function () {
  const datiUtente = {
    email: emailInput.value,
    password: PasswordInput.value,
  };
  localStorage.setItem("arrayInfoUtente", JSON.stringify(datiUtente));
  mostraValoreSalvato();
  emailInput.value = "";
  PasswordInput.value = "";
});

buttonReset.addEventListener("click", function () {
  localStorage.removeItem("arrayInfoUtente");
  mostraValoreSalvato();
});

function mostraValoreSalvato() {
  let valoreSalvato = localStorage.getItem("arrayInfoUtente");
  if (valoreSalvato) {
    paragrafoOutput.innerHTML = `Email: ${emailInput.value}; <br>
    Password:*******`;
  } else {
    paragrafoOutput.innerHTML = "";
  }
}
mostraValoreSalvato();

// SECONDO ESERCIZIO
let counter = parseInt(sessionStorage.getItem("secondiSalvati")) || 0; //se esiste metti il valore, sennò metti 0 se non esiste all'apertura del tab
sessionStorage.setItem("secondi", counter);
const secondi = document.getElementById("secondi");

function timer() {
  counter++;
  sessionStorage.setItem("secondiSalvati", counter);
  secondi.innerHTML = ` Secondi trascorsi: ${sessionStorage.getItem(
    "secondiSalvati"
  )}`;
}
timer();

const intervallo = setInterval(timer, 1000);
