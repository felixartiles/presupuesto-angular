import { Egreso } from "./egreso.model";


export class EgresoService{
    egresos: Egreso[] = [
        new Egreso("Prestamo",5000),
        new Egreso("shein",2500)

    ];
    EliminarRegistro(egreso: Egreso){
    const index: number = this.egresos.indexOf(egreso);
    this.egresos.splice(index,1);
    }
}