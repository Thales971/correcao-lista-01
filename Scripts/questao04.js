const temperaturasCelsius = [0,10,20,30,40];
const temperaturasFarenheit = [];
let contadorArrayFarenheit = 0;


// Formula F = C * 9/5 + 32

// Varredura do array com laço de repetição

for (let i = 0; i < temperaturasCelsius.length; i++) {
    temperaturasFarenheit[contadorArrayFarenheit] = temperaturasCelsius[i] * 9 / 5 + 32;
contadorArrayFarenheit++;
}
console.table(temperaturasCelsius)
console.table(temperaturasFarenheit)

