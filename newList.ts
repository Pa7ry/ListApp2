import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-newList',
  templateUrl: 'newList.html'
})
export class NewListPage {

  items = [];
  item:string;

  constructor(public navCtrl: NavController) {

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
			let pos = items.indexOf(this.item);
			items.splice(pos);
          }
        }
      ]
    });
    confirm.present();
  }
}

}
