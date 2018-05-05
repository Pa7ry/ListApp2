import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListasService } from './../../app/services/listas.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private _listasService: ListasService) {

  }

}
