var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    // Constructor 
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Imprime si es mayor de edad o no
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " no es mayor de edad."));
        }
    };
    return Persona;
}());
// Clase Empleado HEREDA de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    // Inicializamos los datos de Persona y el sueldo
    function Empleado(nombre, apellido, direccion, telefono, edad) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = 0;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (nuevoSueldo) {
        this.sueldo = nuevoSueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Su Sueldo es: $".concat(this.sueldo));
    };
    Empleado.prototype.mostrarDatos = function () {
        console.log("--------- Mostrando datos del Empleado ---------");
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
    };
    return Empleado;
}(Persona));
var empleadito = new Empleado("Mario", "Gonzalez", "Barrio Fino", "7555-1234", 31);
empleadito.mostrarDatos();
console.log("------- Verificando si es mayor de edad -------");
empleadito.esMayorDeEdad();
console.log("------- Cargando nuevo sueldo -------");
empleadito.cargarSueldo(4200);
console.log("------- Mostrando sueldo-------");
empleadito.imprimirSueldo();
