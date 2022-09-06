export class Experiencia {
    id?: number;
    lugar: string;
    puesto: string;
    descripcion: string;
    inicio: string;
    fin: string;


    constructor(lugar: string, puesto: string, descripcion: string, inicio: string, fin: string){
        this.lugar = lugar;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.fin = fin;
    }
}
