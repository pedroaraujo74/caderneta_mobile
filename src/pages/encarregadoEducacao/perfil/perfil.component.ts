import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular'

@Component({
  selector: 'page-perfil.component',
  templateUrl: 'perfil.component.html'
})

export class PerfilComponent {

myDate: String = "14/03/1987";

  constructor(public navCtrl: NavController, public navParams : NavParams) {
 
    
  }
}
