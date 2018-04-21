import { ListaItem } from './lista-item';

export class Lista {
    nombre: string;
    empezada: boolean;
    completada: boolean;
    items: ListaItem[];

    constructor( nombre: string ) {
        this.nombre = nombre;
        this.empezada = false;
        this.completada = false;
    }
}