// Snack7
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N=prompt("inserisci un numero")
let numeriCasuali=Math.floor(Math.random()* 100)+1;
let arrayCasuali=[]

for (i=0; i<N; i++){

    let arrayCasuali=[]

    for (index=0; index<10; index++){
        let numeriCasuali=Number.parseInt(Math.floor(Math.random()* 100)+1,10 );
        arrayCasuali.push(numeriCasuali)
    }
   
console.log(arrayCasuali)
}

