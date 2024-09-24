abstract class Persona { //clase persona
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;
  
    // Constructor 
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
  
    // Imprime si es mayor de edad o no
    public esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }
  
    // Método abstracto muetra los datos personales
    abstract mostrarDatos(): void;
}
  

  // Clase Empleado HEREDA de Persona
class Empleado extends Persona {
    public sueldo: number;
  
    // Inicializamos los datos de Persona y el sueldo
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad); 
        this.sueldo = 0;
    }
  
    public cargarSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo;
    }
  
    public imprimirSueldo(): void {
        console.log(`Su Sueldo es: $${this.sueldo}`);
    }

    public mostrarDatos(): void {
        console.log("--------- Mostrando datos del Empleado ---------");
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}

const empleadito = new Empleado("Mario", "Gonzalez", "Barrio Fino", "7555-1234", 31);
  
empleadito.mostrarDatos();
console.log("------- Verificando si es mayor de edad -------");
empleadito.esMayorDeEdad();
console.log("------- Cargando sueldo -------");
empleadito.cargarSueldo(4200);
console.log("------- Mostrando sueldo-------");
empleadito.imprimirSueldo();
