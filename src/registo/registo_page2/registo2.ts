import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
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
  v1:any = 0;
  v2:any = 0;
  v3:any = 0;
  v4:any = 0;
  list : any;
  erro: any;
  codigo: any;
  uid: any;
  rootPage: any = LoginPage;
  default: any = "https://firebasestorage.googleapis.com/v0/b/caderneta-2b6e4.appspot.com/o/default.jpg?alt=media&token=8efe0f7c-c9ac-4491-ac42-87988da46927";
  

  constructor(public navCtrl: NavController, public af: AngularFire, private _fb: FormBuilder, public http: Http, private navParams: NavParams, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.codigo = this.navParams.get('codigo');
    this.uid = this.navParams.get('uid');

    this.form = this._fb.group({
      name: "",
      genero: "",
      date: "",
      telemovel: "",
      codigo_disciplina: "",
      filho: ""
    });
  }

  concluir(model: any, isValid: boolean) {

    this.body = {
      name: model.name,
      genero: model.genero,
      telemovel: model.telemovel,
      date: model.date,
      codigo_disciplina: model.codigo_disciplina,
      filho: model.filho,
      photoUrl: this.default
    }

        if(model.name == ""){
            let toast3 = this.toastCtrl.create({
            message: 'Nome obrigatório',
            duration: 4000
            });
            toast3.present();
        }
        else{
            this.v1 = 1;
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

            }else{

                if(this.v1 == 1 && this.v2 == 1 && this.v3 == 1){
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
  }
    

}

        
    