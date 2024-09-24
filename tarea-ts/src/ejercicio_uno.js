var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente_pagina) {
        this.titulo = titulo;
        this.color = color;
        this.fuente_pagina = fuente_pagina;
        this.alineacion = 'derecha';
    }
    //Primer metodo para obtener titulo, color y fuente de la pagina
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente_pagina
        };
    };
    //Segundo metodo para obtener alineacion
    CabeceraPagina.prototype.obtenerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    //Tercer metodo para imprimir propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente_pagina));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
console.log("-------------- DATOS DE LA PAGINA --------------");
var cabecera = new CabeceraPagina("Ejercicio 1", "Negro", "Arial");
cabecera.obtenerAlineacion("Derecha");
cabecera.imprimirPropiedades();
