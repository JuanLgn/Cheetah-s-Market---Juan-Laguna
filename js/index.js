// MODO CLARO / OSCURO

const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-oscuro")

botonModos.onclick = () => {
    body.classList.toggle("modo-claro")
    if ( body.className === "modo-oscuro modo-claro"){
        botonModos.textContent = "Modo oscuro"
    } else {
        botonModos.textContent = "Modo claro"
    }
}

// SISTEMA DE LOGIN CON GUARDADO EN EL LOCAL STORAGE

const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const contenedorForm = document.querySelector(".container-login")
const logout = document.querySelector("#logout")
const tabla = document.querySelector("table")

const datosUsuario = {
    user: "juan",
    password: "juancontra"
}

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password ) {
        subirAlLs("login", true)
        contenedorForm.style.display = "none"  
        logout.style.display = "block"             
    } else {        
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
    }
}

function validarLogin ( clave ) {
    if ( clave !== true ) {
        contenedorForm.style.display = "flex"
        logout.style.display = "none"  
    } else {
        contenedorForm.style.display = "none"
        logout.style.display = "block"     
    }
}

validarLogin(obtenerDelLs("login"))

// LOGOUT

logout.onclick = () => {
    localStorage.removeItem( "login" )
    console.log("me hacen click")
    validarLogin(obtenerDelLs("login"))
    formLogin.reset()
} 

