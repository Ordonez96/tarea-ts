var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método suma
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método resta
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método multiplicar 
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método dividir
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    };
    // Método calcular potencia (a^b)
    Calculadora.prototype.potencia = function (a, b) {
        return Math.pow(a, b);
    };
    // Método calcular factorial
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("No se puede calcular el factorial de un número negativo");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var opc = new Calculadora();
console.log("-------------- DATOS DE LAS OPERACIONES --------------");
console.log("La Suma es: " + opc.sumar(100, 25));
console.log("La Resta es: " + opc.restar(120, 20));
console.log("La Multiplicación es: " + opc.multiplicar(5, 25));
console.log("La División es: " + opc.dividir(150, 2));
console.log("La Potencia es: " + opc.potencia(5, 3));
console.log("El Factorial es: " + opc.factorial(2));
