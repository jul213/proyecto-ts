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


function ejemplo (nombre: string, apellidos: string){
    return `${nombre} ${apellidos}`; //return en ts
}

let  arrow = () => {
 console.log("funciones flecha");
}


function ejemplomultiple(...nombres: string[]){ // lista nombres tipo string
    nombres.forEach((nombre) => {
        console.log(nombre);
    })
}

ejemplomultiple("martin");  //paso de contenido a la lista

const empleado = (nombre:  string) => console.log(`soy una funcion flecha ${nombre}`); // funcion flecha una linea

empleado("juan");


const tension = (args: string, impulso: () => `hola soy un impulso`) => {
    if (args === "juan"){
        return
    } else {
        impulso() //callback 
    }
} // funcion arrow con funcion anonima incorporada 


// Async 

async function ejemploAsync(): Promise<void> {

    await console.log("tarea  a completar en secuencia");

};

ejemploAsync().then((respuesta) => {
    console.log("respuesta", respuesta);
}).catch((error) => {
    console.log("hay un  error", error);
}).finally(() => "todo a terminado");


//generators

function* ejemploGenerador() {

    //yield

    let index = 0;

    while(index< 5){
        yield index++;
    }
}
// guardamos funcion generadora
let generadora = ejemploGenerador();

//accedemos  a  los valores emitidos

console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3

//worker 

function* watcher(valor: number){

    yield valor;

    yield* worker(valor); //utiliza el  * para llamar a otra funcion
    yield valor + 10; //emitimos  el valor  final
}

function* worker(valor: number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let  generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // (watcher)
console.log(generatorSaga.next().value); // (worker)
console.log(generatorSaga.next().value); // (worker)
console.log(generatorSaga.next().value); // (worker)
console.log(generatorSaga.next().value); // (watcher