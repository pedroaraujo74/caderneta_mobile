import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistoPage_2 } from '../registo_page2/registo2';

@Component({
  templateUrl: 'registo1.html'
})

export class RegistoPage_1 {

  constructor(public navCtrl: NavController) {

  }

  
  registo2(){
      this.navCtrl.push(RegistoPage_2);  
  }
  

}