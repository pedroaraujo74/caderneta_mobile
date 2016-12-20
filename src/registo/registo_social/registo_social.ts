import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
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
  list : any;
  email: any;
  photoUrl : any;
  rootPage: any = LoginPage;
  v2: any = 0;
  v3: any = 0;
  v4: any = 0;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public af: AngularFire, private _fb: FormBuilder, public http: Http, private navParams: NavParams) { }


  ngOnInit() {

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
        this.body = {
            name: this.name,
            email: this.email,
            photoUrl: this.photoUrl,
            genero: model.genero,
            date: model.date,
            filho: model.filho,
            telemovel: model.telemovel,
            codigo_disciplina: model.codigo_disciplina
        }   


        if(model.codigo_disciplina == ""){
            let toast3 = this.toastCtrl.create({
                message: 'Código obrigatório',
                duration: 4000
            });
            toast3.present();
        }
        else{
            this.v2 = 1;
        }

        if(model.filho == ""){
            let toast3 = this.toastCtrl.create({
                message: 'Nome do educando obrigatório',
                duration: 4000
            });
            toast3.present();
        }
        else{
            this.v3 = 1;
        }

    
        if(model.codigo_disciplina != ""){
            this.list = this.af.database.list("/turmas", {
                query: {
                    orderByKey: true,
                    equalTo: model.codigo_disciplina
                }
            });

            let obs = this.list.subscribe(res => {

            if (res[0] == undefined) {
                let toast1 = this.toastCtrl.create({
                message: 'Código inválido',
                duration: 3000
                });
                toast1.present();

            }
            else{

                if(this.v2 == 1 && this.v3 == 1){
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
        })
  }
})

}

}


