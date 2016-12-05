import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistoPage_1 } from '../registo/registo_page1/registo1';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  registo1(){
     this.navCtrl.push(RegistoPage_1);
  }

}