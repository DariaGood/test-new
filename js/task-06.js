const inputText = document.querySelector('#validation-input');
const requiredValue = document.querySelector('[data-length="6"]');

function ValidOn() {
    this.style.borderColor = "green";
}
function ValidNo() {
    this.style.borderColor = "red";
}

inputText.addEventListener("blur", ValidOn, true);
inputText.addEventListener("blur", ValidNo, false);
