class Cuenta {
  public nombre: string;
  public cantidad: number;
  public tipoCuenta: string;
  public numeroCuenta: string;
  
  // Constructor
  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }
  
  // Método para depositar
  public depositar(monto: number): void {
    if (monto < 5) {
      console.log("El depósito debe ser mayor a $5.00 dólares.");
    } else {
      this.cantidad += monto;
      console.log(`Se ha depositado correctamente la cantidad de: $${monto} dólares.`);
    }
  }
  
  // Método para retirar
  public retirar(valor: number): void {
    if (valor < 5) {
      console.log("El retiro debe ser mayor a $5.00 dólares.");
    } else if (this.cantidad < valor) {
      console.log("No hay fondos suficientes en la cuenta para retirar esa cantidad.");
    } else {
      this.cantidad -= valor;
      console.log(`Has retirado $${valor} dólares. Saldo disponible $${this.cantidad} dólares.`);
    }
  }
  
  // Método para mostrar los datos de la cuenta
  public mostrarDatos(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
    console.log(`Número de cuenta: ${this.numeroCuenta}`);
  }
}

const cuentecita = new Cuenta("Bon Jovi", 100000, "Cuenta de Ahorros", "12985654789");
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
cuentecita.mostrarDatos();  // Muostrando los datos