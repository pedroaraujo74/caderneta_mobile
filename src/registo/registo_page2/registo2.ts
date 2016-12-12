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
  constructor(public navCtrl: NavController, public af: AngularFire, private _fb: FormBuilder, public http: Http, private navParams: NavParams) { }


  ngOnInit() {

    this.codigo = this.navParams.get('codigo');
    this.uid = this.navParams.get('uid');


    this.form = this._fb.group({
      firstName: "",
      lastName: "",
      genero: null,
      date: null,
      telemovel: null
    });
  }


  concluir(model: User, isValid: boolean) {


    this.body = {
      firstName: model.firstName,
      lastName: model.lastName,
      genero: model.genero,
      dn: model.DN
    }


      this.http.patch('https://caderneta-2b6e4.firebaseio.com/encarregados/' + this.uid + '/.json', model)
      .subscribe(
      data => {
       this.navCtrl.setRoot(LoginPage);
      },
      err =>
        () => console.log('complete')
      );


  }
}




