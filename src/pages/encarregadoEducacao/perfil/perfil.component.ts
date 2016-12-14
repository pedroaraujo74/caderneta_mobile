import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { perfilEdit } from './perfil.interface'


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
id: any;

constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, private http: Http, private _fb: FormBuilder) {}

teste(){
  this.edit=0;
}

  ngOnInit() {
      this.af.auth.subscribe(res => {
          this.edit=0;
          console.log(res.uid);
          //console.log("edit:"+this.edit);
          this.perfil = this.http.get('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '.json').subscribe(data => {
              this.perfil = data.json();
              console.log(this.perfil.firstName);
              this.form = this._fb.group({
                firstName:[this.perfil.firstName, Validators.compose([Validators.required, Validators.maxLength(15)])],
                lastName: [this.perfil.lastName, Validators.compose([Validators.required, Validators.maxLength(15)])],
                date: this.perfil.date,
                email: [this.perfil.email, Validators.compose([Validators.required, Validators.maxLength(50)])],
                telemovel: [this.perfil.telemovel, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
                filho: [this.perfil.filho, Validators.compose([Validators.required, Validators.maxLength(50)])],
              
              });

                });
                this.form = this._fb.group({
                  firstName: "",
                  lastName: "",
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
            firstName: model.firstName,
            lastName: model.lastName,
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

}
