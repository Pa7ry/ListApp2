import { ListaItem } from './lista-item';

export class Lista {
    nombre: string;
    icono: string;
    acabada: boolean;
    empezada: boolean;
    items: ListaItem[];

    constructor( nombre: string ){
        this.nombre = nombre;
        this.acabada = false;
        this.empezada = false;
        this.icono = 'ios-heart';
    }

}