console.log("\nEjercicio b:");


var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var gatoString = 'Gato #' + i + ': 🐈';

    for (var j = 1; j <= cantidadDePasos; j++) {
        gatoString += ' 🐾';
    }

    console.log(gatoString);
}