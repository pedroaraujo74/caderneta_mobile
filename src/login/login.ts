import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Http } from '@angular/http'
import { User } from './login.interface'
import { RegistoPage_1 } from '../registo/registo_page1/registo1';
import { TabsPage } from '../pages/tabs/tabs';
import { Vibration } from 'ionic-native';
@Component({
  templateUrl: 'login.html'
})

export class LoginPage implements OnInit {
  rootPage: any = TabsPage;
  form: any;
  code: any;
  erroVazio: string = 'You must include credentials to use this auth method.';

  constructor(public navCtrl: NavController, public af: AngularFire, public _fb: FormBuilder, public toastCtrl: ToastController, private http: Http) {

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
     console.log(err)
      if(err.toString() == this.erroVazio){
          let toast0 = this.toastCtrl.create({
            message: 'Preencha o(s) campo(s)',
            duration: 3000
            });
            toast0.present();

            Vibration.vibrate(1000);

      }

      else if(err.message.toString() == "There is no user record corresponding to this identifier. The user may have been deleted."){
         let toast1 = this.toastCtrl.create({
            message: 'Email inválido',
            duration: 3000
            });
            toast1.present();

            Vibration.vibrate(1000);
      }
      else if(err.message.toString() == "There is no user record corresponding to this identifier. The user may have been deleted."){
         let toast1 = this.toastCtrl.create({
            message: 'Password inválida',
            duration: 3000
            });
            toast1.present();

            Vibration.vibrate(1000);
      }
      })
      
    } 

    
    
}