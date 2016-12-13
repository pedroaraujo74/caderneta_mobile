import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFire } from 'angularfire2';

import { User } from './login.interface'
import { RegistoPage_1 } from '../registo/registo_page1/registo1';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage implements OnInit {
  rootPage: any = TabsPage;
  form: any;
  erroVazio: string = 'You must include credentials to use this auth method.';

  constructor(public navCtrl: NavController, public af: AngularFire, public _fb: FormBuilder, public toastCtrl: ToastController) {

  }

  registo1() {
    this.navCtrl.push(RegistoPage_1);
  }

  ngOnInit() {
    this.form = this._fb.group({
      email: "",
      password: ""
    });
  }

  login(model: User, isValid: boolean) {

    this.af.auth.login(model).then(res => {
      this.navCtrl.setRoot(TabsPage);


    }).catch(err => {
      
      if(err.toString() == this.erroVazio){
          let toast0 = this.toastCtrl.create({
            message: 'Preencha o(s) campo(s)',
            duration: 3000
            });
            toast0.present();
      }

      switch (err.code){
         case "auth/invalid-email":
            let toast1 = this.toastCtrl.create({
            message: 'Email mal formatado',
            duration: 3000
            });
            toast1.present();

         case "auth/wrong-password":
            let toast2 = this.toastCtrl.create({
            message: 'Password incorreta',
            duration: 3000
            });
            toast2.present();        
        }
      })
    } 
}