var Cancion = /** @class */ (function () {
    // Constructor
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Datos de la canción
    Cancion.prototype.datosCancion = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
console.log("-------------- DATOS DE LA CANCION --------------");
var rolita = new Cancion("Come Join The Murder", "Rock");
rolita.setAutor("The White Buffalo & The Forest Rangers");
rolita.datosCancion();
