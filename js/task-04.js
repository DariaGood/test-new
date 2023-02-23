let valueCurrent = document.querySelector('#value');
let counterValue = 0;
valueCurrent.innerHTML = counterValue;


const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
function onClickDecrement() {
    counterValue-=1;
    valueCurrent.innerHTML = counterValue;
    
};

function onClickIncrement() {
    counterValue+=1;
    valueCurrent.innerHTML = counterValue;
    
};


buttonDecrement.addEventListener("click", onClickDecrement);
buttonIncrement.addEventListener("click", onClickIncrement);






// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);