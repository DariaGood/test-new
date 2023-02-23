const fontSizeChanging = document.querySelector('#font-size-control');
const textToResize = document.querySelector('#text');

// Обрабатываем изменение ползунка
fontSizeChanging.addEventListener("input", function() {
  // Получаем текущее значение ползунка и устанавливаем его в качестве размера шрифта для элемента
  const fontSize = fontSizeChanging.value + "px";
  textToResize.style.fontSize = fontSize;
});