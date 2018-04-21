import { Injectable } from '@angular/core';
import { Lista } from './../class/lista';

@Injectable()

export class ListaService {

    lista: Lista[] = [];

    constructor() {
        console.log('Servicio cargado!');

        let lista1 = new Lista('Planes de novios');

        let lista2 = new Lista('Mudanza');

        this.lista.push( lista1 );
        this.lista.push( lista2 );

    }

}
