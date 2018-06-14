import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListasService } from './../../app/services/listas.service';
import { NewListPage } from './../newList/newList';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController,
              public _listasService: ListasService) {

  }

  newList(){
    this.navCtrl.push(NewListPage);

  }
  
}
