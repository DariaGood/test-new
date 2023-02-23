const textInput = document.getElementById("name-input");
const textBellowInput = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
    if(event.currentTarget.value === '') {
        return textBellowInput.textContent = "Anonymous";
    }
    textBellowInput.textContent = event.currentTarget.value;
           
    }
//textBellowInput.textContent = event.currentTarget.value;
);

//    textInput.addEventListener("input", (event) => {
//         if(textInput.value !== ' ') {
//         textBellowInput.textContent = event.currentTarget.value;
//         }
//         else  {
//                 textBellowInput.textContent = "Anonymous";
//             }
    
//     }) 

// function newTextInput () {
//     textBellowInput.textContent = event.currentTarget.value;
// };

// function withoutTextInput () {
//     textBellowInput.textContent = "Anonymous";
// }

// textInput.addEventListener("input", newTextInput);
// textInput.removeEventListener("click", newTextInput);


