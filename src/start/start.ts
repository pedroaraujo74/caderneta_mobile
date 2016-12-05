import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController) {
      
  }

  goregisto(){
     this.navCtrl.push(LoginPage);
  }

}