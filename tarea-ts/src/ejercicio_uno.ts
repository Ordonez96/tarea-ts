class CabeceraPagina{ 
  private titulo: string;
  private color: string;
  private fuente_pagina: string;
  private alineacion: string;

  constructor(titulo: string, color: string, fuente_pagina: string){
    this.titulo = titulo;
    this.color = color;
    this.fuente_pagina = fuente_pagina;
    this.alineacion = 'derecha';
  }

  //Primer metodo para obtener titulo, color y fuente de la pagina
  obtenerPropiedades(): { titulo: string, color: string, fuente: string } {
    return {
      titulo: this.titulo,
      color: this.color,
      fuente: this.fuente_pagina
    };
  }

  //Segundo metodo para obtener alineacion
  obtenerAlineacion(alineacion: "Centro" | "Derecha" | "Izquierda"): void {
    this.alineacion = alineacion;
  }

    //Tercer metodo para imprimir propiedades
  imprimirPropiedades(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente_pagina}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
}
console.log("-------------- DATOS DE LA PAGINA --------------");
const cabecera = new CabeceraPagina("Ejercicio 1", "Negro", "Arial");
cabecera.obtenerAlineacion("Derecha");
cabecera.imprimirPropiedades();