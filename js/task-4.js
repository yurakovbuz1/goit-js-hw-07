const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const formEmail = formElem.elements[0].value.trim();
    const formPassword = formElem.elements[1].value.trim();
    if (formEmail === "" || formPassword === "") {
        alert("All form fields must be filled in")
    } else {
        const obj = {
            email: formEmail,
            password: formPassword
        }
        console.log(obj);
        formElem.reset();
    }
}
