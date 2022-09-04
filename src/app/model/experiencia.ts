export class Experiencia {
    id?: number;
    nombreE: string;
    puesto: string;
    periodo: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string, puesto: string, periodo: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.puesto = puesto;
        this.periodo = periodo;
    }
}
