import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-newList',
  templateUrl: 'newList.html'
})
export class NewListPage {

  items = [];
  item:string;

  constructor(public navCtrl: NavController,
  						public alertCtrl: AlertController) {

  }

  getItem(item){
    this.items.push(this.item);
	this.item = '';
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
