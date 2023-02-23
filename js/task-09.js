const buttonGetColor = document.querySelector(".change-color");
let nameOfColor = document.querySelector(".color");


buttonGetColor.addEventListener("click", () => {
  let body = document.getElementsByTagName('body')[0];
  let gettingColor = getRandomHexColor();
  body.style.backgroundColor = gettingColor;
  nameOfColor.innerHTML = gettingColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

