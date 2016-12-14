import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import { AngularFire } from 'angularfire2';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from './registo.interface'
import { NavParams } from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  templateUrl: 'registo_social.html'
})

export class RegistoSocial implements OnInit {
  myDate: any;
  form: any;
  body: any;
  codigo: any;
  uid: any;
  name: any;
  email: any;
  photoUrl : any;
  rootPage: any = LoginPage;
  constructor(public navCtrl: NavController, public af: AngularFire, private _fb: FormBuilder, public http: Http, private navParams: NavParams) { }


  ngOnInit() {

    this.af.auth.subscribe(res => {


      


    })

    this.af.auth.subscribe(res => {

      if(res.facebook){
      console.log(res);
        
            this.name = res.facebook.displayName;
            this.email = res.facebook.email;
            this.photoUrl = res.facebook.photoURL;
      }else{
            this.name = res.google.displayName;
            this.email = res.google.email;
            this.photoUrl = res.google.photoURL;

      }
        })

    this.codigo = this.navParams.get('codigo');
    this.uid = this.navParams.get('uid');

    this.form = this._fb.group({
      lastName: "",
      genero: null,
      date: null,
      telemovel: null,
      codigo_disciplina: null,
      filho: null

    });
  }


  concluir(model: any, isValid: boolean) {


this.af.auth.subscribe(res => {
  console.log(res);
    this.body = {
      name: this.name,
      email: this.email,
      photoUrl: this.photoUrl,
      genero: model.genero,
      dn: model.DN,
      filho: model.filho,
      telemovel: model.telemovel,
      codigo_disciplina: model.codigo_disciplina

    }   


      this.http.patch('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '/.json', this.body)
      .subscribe(
      data => {
       this.navCtrl.setRoot(TabsPage);
      },
      err =>
        () => console.log('complete')
      );

})
  }
}




