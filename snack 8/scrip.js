const divUno=document.createElement("div");

const divDue=document.createElement("div");
let mySection=document.querySelector(".containerEl");

mySection.appendChild(divUno);

mySection.appendChild(divDue);

divUno.classList.add("red");

divDue.classList.add("green");


const numeriCasuali=[1,2,3,4,6,8,9,0];

for (index=0; index<numeriCasuali; index++){

    if(numeriCasuali[index] %2===1){

        divUno.append(numeriCasuali)

    }else(numeriCasuali[index] %2===0)

        divDue.append(numeriCasuali)
    
}




