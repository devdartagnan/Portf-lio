export {};
const form = document.querySelector(".contact-form") as HTMLFormElement;
const inputEmail = document.querySelector("#email") as HTMLInputElement;
const inputNome = document.querySelector("#name") as HTMLInputElement;
const inputMsg = document.querySelector("#message") as HTMLInputElement;
const labelEmail = document.querySelector("#labelEmail") as HTMLElement;

let passEmail: boolean;
let passNome: boolean;
let passMsg: boolean;

function ValidateEmail(input: HTMLInputElement) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    labelEmail.style.color = "green";
    return (passEmail = true);
  } else {
    labelEmail.style.color = "red";
    return (passEmail = false);
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputNome.value === "" ? (passNome = false) : (passNome = true);
  inputMsg.value === "" ? (passMsg = false) : (passMsg = true);
  if (passEmail && passNome && passMsg === true) {
    alert("Mensagem enviada com sucesso!");
    setTimeout(()=>{
        location.reload()
    },500)
  } else {
    alert("Infelizmente falta alguns dados a preencher!");
  }
}); 
inputEmail.addEventListener("change", () => {
  ValidateEmail(inputEmail);
});
