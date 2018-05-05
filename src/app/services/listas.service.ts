import { Injectable } from "@angular/core";
import { Lista } from './../clases/lista';

@Injectable()
export class ListasService{

    listas: Lista[] = [];

    constructor() {

        let lista1 = new Lista('Planes de novios');
        let lista2 = new Lista('Mudanza');

        this.listas.push( lista1 );
        this.listas.push( lista2 );

        console.log('Service Ready')
    }

}