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
