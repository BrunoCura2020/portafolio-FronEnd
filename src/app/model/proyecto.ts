export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    realizacion: string;
    imagen: string;

    constructor(nombre: string, descripcion: string, realizacion: string, imagen: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.realizacion = realizacion;
        this.imagen = imagen;
    }
}
