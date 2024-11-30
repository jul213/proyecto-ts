import { deleteAllCookies, setCookie } from "cookies-utils"

// persistencia  de  datos

// 1. localstorage --> almacena los datos en el navegador (no se eliminan automaticamente)
//2. sessionStorage --> la diferencia radica en la sesion de navegador. es decir, los datos se   persisten en la sesion de navegador
//3. cookies --> tienen una fecha de caducidad y tambien tienen un ambito de URL

//localStorage

function usoLocalStorage(): void{

    localStorage.setItem("nombre", "juan");
}

function lectura(): void{
    localStorage.getItem("nombre");
}


//cookies para usar podemos usar esto de un tercero  npm i cookies-utils --save 

const cookieOptions = {
    name: "cookie1",
    value: "valor",
    maxAge: 10 * 60, // opcional numero (segundos)
    expires: new Date(2050, 10, 1), // fecha    opcional
    path: "/" // opcional
};

//seteamos la cookie
setCookie(cookieOptions);

//eliminar
deleteAllCookies();