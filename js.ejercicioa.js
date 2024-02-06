// A) Crear una variable con un numerico libre:


console.log("Ejercicio A:");

var cantidadDeGatos = 10;

for (var n = 1; n <= 10; n++) {
    var emoji = n % 3 === 0 ? "😹"
        : (n % 3 === 1 ? "😺" : "😸");
    console.log("Gato #" + n + ":" + emoji);
} 