const showHide = document.getElementById("show-hide")
const pass = document.getElementById("pass")
const user = document.getElementById("user")

if(localStorage.getItem("login") == 1){
    window.location.href="inicio.html"
}
 /*remover o indice criado*/
//localStorage.removeItem("login")

function logout() {
    localStorage.removeItem("login")
    setTimeout(() => {
        window.location.href="index.html" 
    }, 1000);
}

function login() {
    if( user.value == "paulo" && pass.value == "1234" ){
        alert("Bem vindo!")
        localStorage.setItem("login", 1)
        /*para redirtecionar para uma página URL "#" 
        window.location.href="#" */
    } else {
        alert("Acesso negado!\nUsuário ou senha incorreto.")
    }
}

/* mostrar e esconder senha */
showHide.addEventListener("click", function(){
    if(pass.type == "password") {
        pass.type = "text"
        showHide.innerHTML = "esconder"
    } else {
        pass.type = "password"
        showHide.innerHTML = "mostrar"
    }
})