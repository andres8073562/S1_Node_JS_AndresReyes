//Autor conoce sus Libro y cada Libro conoce a su Autor
class Autor {
    constructor(id,nombre){
        this.id=id;
        this.nombre=nombre;
        this.libros=[];
    }
    agregarLibro(libro){
        if(this.libros.includes(libro)==false){
            this.libros.push(libro);
            libro.setAutor(this);
        }
    }
    //Quitar libro de ambos lados
    quitarLibro(libro){
        const index = this.libros.indexOf(libro);
        if(index !== -1){
            this.libros.splice(index,1);
            libro.setAutor(null);
        }
    }
}

module.exports= Autor;