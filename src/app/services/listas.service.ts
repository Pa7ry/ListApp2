import { Injectable } from "@angular/core";
import { Lista } from './../clases/lista';

@Injectable()
export class ListasService{

    listas: Lista[] = [];
	
	Lista: ListaItem[] = []; 

    constructor() {

        let lista1 = new Lista('Planes de novios');
		this.lista1.push(new ListaItem ('Ir de viaje', false));
		this.lista1.push(new ListaItem ('Hacernos fotos', true));
		this.lista1.push(new ListaItem ('Comer en el Pirata's', false));
		this.lista1.push(new ListaItem ('Probar supersimuladores', false));
		
		 this.listas.push( lista1 );
		
        let lista2 = new Lista('Mudanza', true, false, 'ios-home' );
		this.lista2.push(new ListaItem('Ir a Ikea', true));
		this.lista2.push(new ListaItem('LLevar cockpit', true));
		this.lista2.push(new ListaItem('Comprar mesa', true));
		this.lista2.push(new ListaItem('Llevar ropa', true));
		this.lista2.push(new ListaItem('Reorganizar habitación', true));
		
        this.listas.push( lista2 );

        console.log('Service Ready')
    }

}