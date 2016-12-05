import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import { RegistoPage_2 } from '../registo_page2/registo2';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './registo.interface'
@Component({
  templateUrl: 'registo1.html'
})

export class RegistoPage_1 implements OnInit {

  form: any;
  body: any;
  err: any;
  codigo_disciplina: string = "-KY4Jl3N103L6kNd-liQ"
  constructor(public navCtrl: NavController, public af: AngularFire, private _fb: FormBuilder, public http: Http) { }


  ngOnInit() {
    this.form = this._fb.group({
      email: "",
      password: "",
      codigo_disciplina: "-KY4Jl3N103L6kNd-liQ"
    });
  }


  registar(model: User, isValid: boolean) {



    this.body = {
      email: model.email,
      password: model.password,
    }

    console.log(model);
    this.af.auth.createUser(this.body).then(res => {
      console.log(res);



      this.http.put('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '/.json', model)
        .subscribe(
        data => {
          this.navCtrl.push(RegistoPage_2, {
            codigo: this.codigo_disciplina,
            uid: res.uid
          });
        },
        err =>
          () => console.log('complete')
        );
    });

  }




}
