const nameInput = document.querySelector("#user-name-input");
const passInput=document.querySelector("#password-input");
let nameInputValue;
let passInputValue
nameInput.addEventListener("input", ()=> {
    nameInputValue = nameInput.value
    console.log(nameInputValue);
})
nameInput.addEventListener("blur", ()=> {
    if(!nameInputValue || nameInputValue.length < 3){
        nameInput.className = "input-error";
        const p = document.createElement("p");
        document.querySelector("#name-input-container").append("Name is too short", p);
    }
})
nameInput.addEventListener("focus", ()=> {
    document.querySelector("#name-input-container > p").remove();
})

passInput.addEventListener("input", ()=> {
    passInputValue = passInput.value
    console.log(passInputValue);
})
passInput.addEventListener("blur", ()=> {
    if(!passInputValue || passInputValue.length < 10){
        passInput.className = "input-error";
        const s = document.createElement("s");
        document.querySelector("#pass-input-container").append("Password is too short", s);
    }
})
passInput.addEventListener("focus", ()=> {
    document.querySelector("#pass-input-container > s").remove();
})

// Выбираем кнопку
const themeButton = document.querySelector(".theme-button");
// Отслеживаем щелчок по кнопке
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});