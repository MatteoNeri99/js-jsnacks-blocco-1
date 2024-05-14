const numeri=[]
for (let i=0; i < 6; i++){
    let numberUser=parseInt(prompt("inserisci un numero"),10)
    if (numberUser %2==1){
        numeri.push(numberUser)
    }
}
console.log(numeri)
