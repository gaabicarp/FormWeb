export class Respuesta{
    TotalMensual:number;
    TotalAnual:number;
    CantidadBotellas:number;
    Detalle: Array<string>

    constructor(){
        this.TotalMensual = 0;
        this.TotalAnual = 0;
        this.CantidadBotellas = 0;
        this.Detalle = [];
    }
}