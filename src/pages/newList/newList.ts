import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-newList',
  templateUrl: 'newList.html'
})
export class NewListPage {

  items:any = [];
  item:string;

  constructor(public navCtrl: NavController,
  						public alertCtrl: AlertController) {

  }

  getItem(item){
	if (this.item == 'Patricia') {
		this.items.push('Patricia te quiere mucho y siempre lo hará <ion-icon ios="ios-woman" md="md-woman"></ion-icon> <ion-icon ios="ios-heart" md="md-heart"></ion-icon> <ion-icon ios="ios-man" md="md-man"></ion-icon>');
		this.item = '';
	} else if (this.item == 'Gianmarco') {
		this.items.push('No olvidarme de que Patricia me ama');
		this.item = '';
	} else if (this.item == 'novios') {
		this.items.push('Quererse siempre');
		this.item = '';
	} else if(this.item != '') {
	    this.items.push(this.item);
		this.item = '';
	}
  }
  
   delete(item){
    const confirm = this.alertCtrl.create({
      title: 'Eliminar item',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: (item) => {
            console.log('Agree clicked');
			let pos = this.items.indexOf(this.item);
			this.items.splice(pos);
          }
        }
      ]
    });
    confirm.present();
  }

}
