enum listatareas {
    "nombre" = "lista 1",
    "tipo"  =  "A",
    "prioridad" = "maxima",
    "tiempo" = "1 hora"
     };


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
