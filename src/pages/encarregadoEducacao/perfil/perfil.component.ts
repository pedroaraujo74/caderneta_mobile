import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { perfilEdit } from './perfil.interface';
import {StartPage} from '../../../start/start';
import { Camera } from 'ionic-native';
import { tabs } from '../pages/tabs';


@Component({
  selector: 'page-perfil.component',
  templateUrl: 'perfil.component.html'
})


export class PerfilComponent implements OnInit {

myDate: String = "14/03/1987";
perfil: any;
edit: any;
body: any;
name: any;
form : FormGroup;
loader: any;
id: any;
router: any;
rootPage: any = StartPage;
options:any;
file: any;
metadata: any;
uploadTask: any;
storageRef: any = firebase.storage().ref;



constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, private http: Http, private _fb: FormBuilder, public loadingCtrl: LoadingController) {}
ionViewDidLoad() {
    this.presentLoading();
  }

teste(){
  this.edit=0;
}

  ngOnInit() {

      this.af.auth.subscribe(res => {
          this.edit=0;
          console.log(res.uid);
          this.perfil = this.http.get('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '.json').subscribe(data => {
  console.log('data:'+data);
  this.loader.dismiss();
              this.perfil = data.json();
              this.form = this._fb.group({
                name:[this.perfil.name, Validators.compose([Validators.required, Validators.maxLength(15)])],
                date: this.perfil.date,
                email: [this.perfil.email, Validators.compose([Validators.required, Validators.maxLength(50)])],
                telemovel: [this.perfil.telemovel, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
                filho: [this.perfil.filho, Validators.compose([Validators.required, Validators.maxLength(50)])],

              });

                });
                this.form = this._fb.group({
                  name: "",
                  date: "",
                  email: "",
                  telelemovel: "",
                  filho: "",
                });

          })
    }



    settings(){
      this.edit=1;
    }

    editar(model: perfilEdit, isValid: boolean) {
        this.body = {
            name: model.name,
            date: model.date,
            email: model.email,
            telemovel: model.telemovel,
            filho: model.filho,
        }
        this.af.auth.subscribe(res=> {

        this.http.patch('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '.json', model).subscribe(
          data => {
              console.log(data);
               this.ngOnInit();
          },
          err =>
            () => console.log('complete')
          );


          res.uid;
         });


        console.log(model);

    }

    presentLoading() {
  this.loader = this.loadingCtrl.create({
    content: "A carregar...",
  });

  this.loader.present();
}


logout(){
    this.af.auth.subscribe(res => {
    this.af.auth.logout();
    this.navCtrl.setRoot(StartPage);
    
    
 
   let elem = <HTMLElement>document.querySelector(".tabbar");
    if (elem != null) {
      elem.style.display = 'none';
    }

  
 });
}

}
