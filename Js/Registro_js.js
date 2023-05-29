//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}
function validar(){
    let tamanoCajaTextoUno=document.getElementById("cajaTextoUsuario").value.length;
    let tamanoCajaTextoDos=document.getElementById("cajaTextoContraseña").value.length;
    if(tamanoCajaTextoUno<3){
        let mensajeAlerta="El nombre ingresado no cumple los requisitos";
        document.getElementById("alerta").innerText=mensajeAlerta;
        document.getElementById("alerta").style.color="red";
        document.getElementById("cajaTextoUsuario").style.backgroundColor="#ffa1af";

    }
    if(tamanoCajaTextoUno>3 && tamanoCajaTextoUno<20) {
        let mensajeAlerta="";
        document.getElementById("alerta").innerText=mensajeAlerta;
        document.getElementById("cajaTextoUsuario").style.backgroundColor="#c7ffcf";
    }
    if(tamanoCajaTextoDos<3){
        let mensajeAlerta="La contraseña debe contener mas caracteres";
        document.getElementById("alertaContraseña").innerText=mensajeAlerta;
        document.getElementById("alertaContraseña").style.color="red";
        document.getElementById("cajaTextoContraseña").style.backgroundColor="#ffa1af";

    }
    if(tamanoCajaTextoDos>5 && tamanoCajaTextoDos<10) {
        let mensajeAlerta="";
        document.getElementById("alertaContraseña").innerText=mensajeAlerta;
        document.getElementById("cajaTextoContraseña").style.backgroundColor="#c7ffcf";
    }
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(!regexEmail.test(cajaTextoEmail.value)){
        let mensajeAlerta="El correo no es valido";
        document.getElementById("alertaEmailRegistro").innerText=mensajeAlerta;
        document.getElementById("alertaEmailRegistro").style.color="red";
        document.getElementById("cajaTextoEmail").style.backgroundColor="#ffa1af";

    }
    else{
        let mensajeAlerta="";
        document.getElementById("alertaEmailRegistro").innerText=mensajeAlerta;
        document.getElementById("cajaTextoEmail").style.backgroundColor="#c7ffcf";
    }
    let tamanoCajaTextoUsuario=document.getElementById("cajaTextoUsuarioRegistro").value.length;
    let tamanoCajaTextoContraseña=document.getElementById("cajaTextoContraseñaRegistro").value.length;
    if(tamanoCajaTextoUsuario<3){
        let mensajeAlerta="El nombre ingresado no cumple los requisitos";
        document.getElementById("alertaUsuarioRegistro").innerText=mensajeAlerta;
        document.getElementById("alertaUsuarioRegistro").style.color="red";
        document.getElementById("cajaTextoUsuarioRegistro").style.backgroundColor="#ffa1af";

    }
    if(tamanoCajaTextoUsuario>3 && tamanoCajaTextoUsuario<20) {
        let mensajeAlerta="";
        document.getElementById("alertaUsuarioRegistro").innerText=mensajeAlerta;
        document.getElementById("cajaTextoUsuarioRegistro").style.backgroundColor="#c7ffcf";
    }
    if(tamanoCajaTextoContraseña<3){
        let mensajeAlerta="La contraseña debe contener mas caracteres";
        document.getElementById("alertaContraseñaRegistro").innerText=mensajeAlerta;
        document.getElementById("alertaContraseñaRegistro").style.color="red";
        document.getElementById("cajaTextoContraseñaRegistro").style.backgroundColor="#ffa1af";

    }
    if(tamanoCajaTextoContraseña>5 && tamanoCajaTextoContraseña<10) {
        let mensajeAlerta="";
        document.getElementById("alertaContraseñaRegistro").innerText=mensajeAlerta;
        document.getElementById("cajaTextoContraseñaRegistro").style.backgroundColor="#c7ffcf";
    }
    

}