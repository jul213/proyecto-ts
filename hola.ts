enum listatareas {
    "nombre" = "lista 1",
    "tipo"  =  "A",
    "prioridad" = "maxima",
    "tiempo" = "1 hora"
     };

type coche = {
    nombre: string,
    modelo: string,
    matricula: string,
    color: string,
    ruedas: number
} //types en ts


let lista = ["hola","sudo","ls","cd"];

lista.forEach((elemento) => {
    console.log(elemento); //foreach
});

for(const elemento in lista){
    console.log(elemento);  //for-in
}

for(let index = 0; index < lista.length; index++){
    const elemento = lista[index]; //for clasico en ts
    console.log(`el indice de la lista actual ${index} y el elemento de la lista es ${elemento}`);
}

const numero: number = 6;
let indice: number= 0;

while(indice < numero){
    if (indice == 6){
    console.log("el indice a llegado a igualar a el numero");
    } else{
        console.log("el numero no a llegado a igualar el numero");
        indice++;
    }
}

let tarea = {
    nombre: "tarea1",
    asignacion: "matematicas",
    prioridad: "alta"
}

let {nombre, asignacion, prioridad} = tarea; //propagacion

let listaproductos: string[] = ["maquina", "cafe"];
let listadomingo: string[] = [...listaproductos, "descansar", "variable"];
let listamili: number[] = [20,50,30];
let listasemana = [...listadomingo, ...listamili];

let estadoAPP = {
 usuario: "admin",
 session: "sesion 1",
 jwt: "autenticacion"
}

let nuevoEstado = {
    ...estadoAPP,
    sesion: 4

} //propagacion en objetos


function  hola(nombre?: string){ //parametro opcional  ?
    if  (nombre){
        console.log(`hola ${nombre}`);
    } else{
        console.log("hola");
    }
}

hola();  // output hola
hola("pablo");  // output hola  pablo

let  arrow = () => {
 console.log("funciones flecha");
}