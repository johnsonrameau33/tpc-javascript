console.log("\nEjercicio C:");

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var n = 1; n <= 10; n++) {
    var emoji = n % 2 === 0 ? " 🐈⬛" : "🐈";
    var paso = "";

    for (var j = 0; j < 4; j++) {
        paso = paso + "🐾";
    }

    console.log("Gato #" + n + ": " + emoji + " " + paso);
}
