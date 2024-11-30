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