const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");


function onLoginSubmit(event){
    event.preventDefault();    //새로고침 방지
    console.log(loginInput.value);
   
}

loginForm.addEventListener("submit",onLoginSubmit);