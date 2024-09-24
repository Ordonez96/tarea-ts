class Calculadora {
    // Método suma
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método resta
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método multiplicar 
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método dividir
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
}

    // Método calcular potencia (a^b)
    potencia(a: number, b: number): number {
        return Math.pow(a, b);
    }

    // Método calcular factorial
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("No se puede calcular el factorial de un número negativo");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


const opc = new Calculadora();
console.log("-------------- DATOS DE LAS OPERACIONES --------------");
console.log("La Suma es: " + opc.sumar(100, 25));         
console.log("La Resta es: " + opc.restar(120, 20));       
console.log("La Multiplicación es: " + opc.multiplicar(5, 25)); 
console.log("La División es: " + opc.dividir(150, 2));   
console.log("La Potencia es: " + opc.potencia(5, 3));   
console.log("El Factorial es: " + opc.factorial(2)); 