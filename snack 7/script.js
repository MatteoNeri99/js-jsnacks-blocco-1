// Snack7
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N=prompt("inserisci un numero")
let numeriCasuali=Math.floor(Math.random()* 100)+1;
let arrayCasuali=[]

for (i=0; i<N; i++){

    let arrayCasuali=[numeriCasuali]
    
    for (index=0; index<10; index++){
        let numeriCasuali=Math.floor(Math.random()* 100)+1;
    }
   

}

console.log(arrayCasuali)