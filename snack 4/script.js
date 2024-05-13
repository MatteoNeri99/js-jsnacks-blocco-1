const nameGatsby= ["matteo","andrea","giovanni","riccardo","davide","simone"]
let nomeUtente=prompt("scrivi il tuo nome per vedere se puoi partecipare alla festa")
if (nameGatsby.includes(nomeUtente)) {
    console.log("sei il benvenuto")
}else{
    console.log("non sei il benvenuto")
}