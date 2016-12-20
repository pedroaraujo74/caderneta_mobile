import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http'
import { RegistoPage_2 } from '../registo_page2/registo2';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './registo.interface';
import { Vibration } from 'ionic-native';

@Component({
  templateUrl: 'registo1.html',
})

export class RegistoPage_1 implements OnInit {

  form: any;
  body: any;
  v1:any = 0;
  v2:any = 0;
  v3:any = 0;
  v4:any = 0;

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


        if(model.email == ""){
            let toast3 = this.toastCtrl.create({
            message: 'Email obrigatório',
            duration: 4000
            });
            toast3.present();
            Vibration.vibrate(1000);
        }
        else{
            this.v1 = 1;
        }

        if(model.password == ""){
            let toast3 = this.toastCtrl.create({
            message: 'Password obrigatória',
            duration: 4000
            });
            toast3.present();
            Vibration.vibrate(1000);
        } 
        else{
            this.v2 = 1;
        }

        if(model.password2 == ""){
            let toast3 = this.toastCtrl.create({
            message: 'Password obrigatória',
            duration: 4000
            });
            toast3.present();
            Vibration.vibrate(1000);
        }
        else{
            this.v3 = 1;
        }

        if (model.password != model.password2) {
            let toast3 = this.toastCtrl.create({
              message: 'Passwords diferentes',
              duration: 4000
            });
            toast3.present();
            Vibration.vibrate(1000);
        }
        else{
            this.v4 = 1;
        }

        if(this.v1 == 1 && this.v2 == 1 && this.v3 == 1 && this.v4 == 1){
            let enviar = {
                email: model.email,
            }
            
            this.af.auth.createUser(this.body).then(res => {

            this.http.put('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '/.json', enviar)
            .subscribe(
                data => {
                    this.navCtrl.push(RegistoPage_2, {
                      uid: res.uid
                    });
                },
                err => console.log(err)
            );
            
        })
    }
  }
}



