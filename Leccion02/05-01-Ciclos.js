let contador = 0;
let count = 0;

while(contador < 10){
    console.log("while " + contador);
    contador ++;
}

//se ejecuta al menos una vez, primero hace el proceso, despues compara si cumple la condicion
do {
    console.log("do while " + count);
    count ++;
}while(count < 1)

console.log("Fin ciclo!!!");

for(let i = 0; i<= 10; i++){
    console.log("for " + i);
    i ++;
}

for(let j = 0; j <= 10; j++){
    if(j % 22 == 0){
        console.log("for " + j);
        break;
    }        
    j ++;
}

for(let k = 0; k <= 10; k++){
    if(k % 22 == 0){
        console.log("for " + k);
        continue;
    }        
    k ++;
}