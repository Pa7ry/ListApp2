import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListasService } from './../../app/services/listas.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController,
  						public alertCtrl: AlertController,
						public _listasService: ListasService) {

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
