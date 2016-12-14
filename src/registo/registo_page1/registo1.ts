import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { Http } from '@angular/http'
import { RegistoPage_2 } from '../registo_page2/registo2';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './registo.interface'

@Component({
  templateUrl: 'registo1.html',
})

export class RegistoPage_1 implements OnInit {

  form: any;
  body: any;
  codigo_disciplina: string = "-KY4Jl3N103L6kNd-liQ"
  erroVazio: string = 'You must include credentials to use this auth method.';
  constructor(public navCtrl: NavController, public af: AngularFire, private _fb: FormBuilder, public http: Http, public toastCtrl: ToastController) { }


  ngOnInit() {
    this.form = this._fb.group({
      email: "",
      password: "",
      password2: "",
      codigo_disciplina: "-KY4Jl3N103L6kNd-liQ"
    });
  }

  registar(model: User, isValid: boolean) {

    this.body = {
      email: model.email,
      password: model.password,
      password2: model.password2,
    }
     let enviar = {
       email: model.email,
       codigo_disciplina: model.codigo_disciplina
    }

    if (model.password != model.password2){
        let toast3 = this.toastCtrl.create({
            message: 'A password tem que ser igual',
            duration: 3000
            });
            toast3.present();
    }


    else{
        this.af.auth.createUser(this.body).then(res => {

      this.http.put('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '/.json', enviar)
        .subscribe(
        data => {

          console.log(data);
          this.navCtrl.push(RegistoPage_2, {
            codigo: this.codigo_disciplina,
            uid: res.uid
          });
          

        },
        err => console.log(err)
          
        );
      
    }).catch(err => {
      console.log(err);
      if(err.toString() == this.erroVazio){
          let toast0 = this.toastCtrl.create({
            message: 'Preencha o(s) campo(s)',
            duration: 3000
            });
            toast0.present();
      }
/*
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
        */
      })
    }
    
    }

  }



