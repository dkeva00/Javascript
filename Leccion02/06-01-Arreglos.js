//esta forma de declaracion ya no se usa
//let autos = new Array('BMW','Audi','Jeep');
const autos = ['BMW','Audi','Jeep'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for ( let i = 0; i < autos.length; i++ ){
    console.log(i + ' : ' + autos[i]);
}

autos[1] = 'Seat';
console.log(autos[1]);

autos.push('Toyota');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Mazda';
console.log(autos);

autos[5] = 'Porshe';
console.log(autos);

//formas de vaidar si es arreglo
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);