const submit = document.querySelector("#submit");
const password = document.querySelector ("#password");
const username = document.querySelector ("#username");
const visible = document.querySelector ("#visible");

document.addEventListener("change", (e) => {
    if (e.target === visible){
        if (visible.checked === false){
            password.type = "password";
        } else {
            password.type = "text";
        }
    }
});

document.addEventListener ("click", (e) => {
    if (e.target ===submit){
        if(password.value !== "" && username.value !== ""){
            e.preventDefault();
            window.location.href = "index.html";
        }
    }
})