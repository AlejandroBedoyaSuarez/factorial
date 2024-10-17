// Creamos la variable valorusuario para que el usuario ingrese el valor del que quiere obtener el factorial
var valorusuario = prompt("Ingrese el valor al que le quiere sacar su factorial");

// Validamos si el valor ingresado es nulo (canceló el prompt) o está vacío
if (valorusuario === null || valorusuario === "") {
    alert("No ingresaste ningún valor.");
}
//usamos el parseINT (es para poder cambiar la cadena y hacerle entero)  
// Convertimos la entrada a número entero y seguimos con las demás validaciones
else {
    valorusuario = parseInt(valorusuario);

    // Validamos si el valor ingresado no es un número válido
    //pedimos que si sale NaN cuando el usuario escriba, le de la alerta que tiene abajo
    if (isNaN(valorusuario)) {
        alert("Pero dijimos que ingreses algo para hacer el factorial. ¿no? Ingresa un número válido");
    }
    // Verificamos si el número es negativo (no se puede calcular el factorial de números negativos)
    //Pedimos que si el valor es negativo, lo devuelva usando el alert y haciendo un nuevo intento
    else if (valorusuario < 0) {
        alert("Hey, hey pequeña, el factorial no está definido para números negativos. Intentalo de nuevo");
    }
    // Verificamos si el número es entero (el factorial solo se calcula para enteros)
    // Devuelve true si el valor es un número entero y false si no lo es.
    else if (!Number.isInteger(valorusuario)) {
        alert("Mira, compadre, debes ingresar un número entero. ¿Cómo puedo leer lo que me pones?");
    }
    // Limitar el rango máximo para evitar errores de desbordamiento
    else if (valorusuario > 170) {
        alert("FUAA, te pasaste 3 ciudades bro. Lo que me pusiste es demasiado para un factorial.");
    }
    // Si todas las validaciones se pasan, calculamos el factorial
    else {
        // Ponemos en 1 ya que el factorial es una multiplicación acumulada
        var resultado = 1;

        // Hacemos el ciclo for teniendo en cuenta lo siguiente:
        // var i = 1 indica que empezaremos desde el número 1
        // i <= valorusuario indica que recorreremos desde 1 hasta el valor ingresado (incluyéndolo)
        // i++ significa que el contador aumentará de uno en uno en cada iteración
        for (var i = 1; i <= valorusuario; i++) {
            // Multiplicamos correctamente cada iteración
            resultado *= i; // Por ejemplo: 1*1, luego 1*2, luego 2*3, etc.
        }

        // Mostramos el resultado final al usuario
        alert("El número factorial es " + resultado);
    }
}