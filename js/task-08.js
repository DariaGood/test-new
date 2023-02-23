const formSubmit = document.querySelector(".login-form");
formSubmit.addEventListener("submit", submitOnClick);

function submitOnClick(event) {
    event.preventDefault();
    const  {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    alert ("Заповніть всі поля!")};
    {

        console.log(`Email: ${email.value}, password: ${password.value}`);
        event.currentTarget.reset();
    }

}
