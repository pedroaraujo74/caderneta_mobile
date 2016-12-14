import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import { AngularFire } from 'angularfire2';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from './registo.interface'
import { NavParams } from 'ionic-angular';
import { LoginPage } from '../../login/login'
@Component({
  templateUrl: 'registo2.html'
})

export class RegistoPage_2 implements OnInit {
  myDate: any;
  form: any;
  body: any;
  codigo: any;
  uid: any;
  rootPage: any = LoginPage;
  default: any = "https://firebasestorage.googleapis.com/v0/b/caderneta-2b6e4.appspot.com/o/default.jpg?alt=media&token=8efe0f7c-c9ac-4491-ac42-87988da46927";

  constructor(public navCtrl: NavController, public af: AngularFire, private _fb: FormBuilder, public http: Http, private navParams: NavParams) { }


  ngOnInit() {

    this.codigo = this.navParams.get('codigo');
    this.uid = this.navParams.get('uid');


    this.form = this._fb.group({
      name: "",
      genero: null,
      date: null,
      telemovel: null
    });
  }


  concluir(model: any, isValid: boolean) {

    this.body = {
      name: model.name,
      genero: model.genero,
      telemovel: model.telemovel,
      dn: model.date,
      photoUrl: this.default
    }


      this.http.patch('https://caderneta-2b6e4.firebaseio.com/encarregados/' + this.uid + '/.json', this.body)
      .subscribe(
      data => {
       this.navCtrl.setRoot(LoginPage);
      },
      err =>
        () => console.log('complete')
      );


  }
}




