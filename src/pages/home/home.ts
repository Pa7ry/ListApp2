import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListasService } from './../../app/services/listas.service';
import { NewListPage } from './../newList/newList';
import { ListPage } from './../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              public _listasService: ListasService) {

  }
  
  goList(this.Lista) {
  	this.navCtrl.push(ListPage);
  }

  newList(){
    this.navCtrl.push(NewListPage);
  }
  
}
