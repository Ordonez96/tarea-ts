class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;
  
    // Constructor
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
  
    public getAutor(): string {
        return this.autor;
    }
  
    public setAutor(autor: string): void {
        this.autor = autor;
    }
  
    // Datos de la canción
    public datosCancion(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

console.log("-------------- DATOS DE LA CANCION --------------");
const rolita = new Cancion("Come Join The Murder", "Rock");
rolita.setAutor("The White Buffalo & The Forest Rangers");
rolita.datosCancion();
  