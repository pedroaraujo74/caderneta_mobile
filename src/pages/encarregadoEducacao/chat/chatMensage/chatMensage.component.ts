import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { Keyboard } from 'ionic-native';


@Component({
  selector: 'page-ChatChooseComponent',
  templateUrl: 'chatMensage.component.html'
})

export class ChatMensageComponent {

  constructor(public navCtrl: NavController, public navParams : NavParams) {

  }

  hideTabs(){
     
  }
 
}