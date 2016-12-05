import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular'

@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html'
})

export class Disciplinas {

item : any;

  constructor(public navCtrl: NavController, public navParams : NavParams) {

    this.item = navParams.get('encarregando_id');  
    
  }
}


