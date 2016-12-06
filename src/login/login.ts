import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  err: any;

  constructor(public navCtrl: NavController, public af: AngularFire, public _fb: FormBuilder) {

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

    console.log(model);


    this.af.auth.login(model).then(res => {
      console.log(res);
      this.navCtrl.setRoot(TabsPage);


    }).catch(err => {
      this.err = err.message;
    })
  }
}