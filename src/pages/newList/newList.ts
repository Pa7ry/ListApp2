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
    console.log('pepito')
    this.items.push(this.item);
  }

}
