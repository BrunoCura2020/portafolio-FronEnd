export class Educacion {
    id?: number;
    nombre: string;
    carrera: string;
    titulo: string;
    inicio: string;
    fin:string;

    constructor(nombre: string, carrera: string, titulo: string, inicio: string, fin: string){
        this.nombre = nombre;
        this.carrera = carrera;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
    }
}
