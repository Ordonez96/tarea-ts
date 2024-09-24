var Cuenta = /** @class */ (function () {
    // Constructor
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    // Método para depositar
    Cuenta.prototype.depositar = function (monto) {
        if (monto < 5) {
            console.log("El depósito debe ser mayor a $5.00 dólares.");
        }
        else {
            this.cantidad += monto;
            console.log("Se ha depositado correctamente la cantidad de: $".concat(monto, " d\u00F3lares."));
        }
    };
    // Método para retirar
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            console.log("El retiro debe ser mayor a $5.00 dólares.");
        }
        else if (this.cantidad < valor) {
            console.log("No hay fondos suficientes en la cuenta para retirar esa cantidad.");
        }
        else {
            this.cantidad -= valor;
            console.log("Has retirado $".concat(valor, " d\u00F3lares. Saldo disponible $").concat(this.cantidad, " d\u00F3lares."));
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
var cuentecita = new Cuenta("Bon Jovi", 100000, "Cuenta de Ahorros", "12985654789");
console.log("-------------- DEPOSITOS --------------");
//deposito bueno
cuentecita.depositar(200);
//deposito malo
cuentecita.depositar(3);
console.log("-------------- RETIROS --------------");
//reito bueno
cuentecita.retirar(50000);
//retiro malo
cuentecita.retirar(1);
//fondos insuficientes
cuentecita.retirar(50201);
console.log("-------------- DATOS DE LA CUENTA --------------");
cuentecita.mostrarDatos(); // Muostrando los datos
