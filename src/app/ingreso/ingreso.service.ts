import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingresos: Ingreso[] = [
        new Ingreso("Salario",21000),
        new Ingreso("deudas",2000)
    ];
    EliminarRegistro(ingreso: Ingreso){
        const index:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(index, 1);
      }
}