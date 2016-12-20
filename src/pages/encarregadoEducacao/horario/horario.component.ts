
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular'
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';

@Component({
  selector: 'page-HorarioComponent',
  templateUrl: 'horario.component.html',
})

export class HorarioComponent {
  perfil: any;
  codigo: any;
  segunda: any;
  terca: any;
  quarta: any;
  quinta: any;
  sexta: any;
  loader: any;
  read:any;
  horario: any;
  fim: any;

  constructor(public navCtrl: NavController, public http: Http, public af: AngularFire, public loadingCtrl: LoadingController,  public navParams: NavParams) {
  }

ngOnInit() {
    this.af.auth.subscribe(res => {
      this.perfil = this.http.get('https://caderneta-2b6e4.firebaseio.com/encarregados/'+res.uid+'/codigo_disciplina.json').subscribe(data => {
        this.codigo=data.json();
        this.horario = this.af.database.list('turmas/'+this.codigo+'/horario').subscribe(data =>{ this.horario = data;
              for(let i=0; i<5; i++) {

                if(this.horario[i].$key == "segunda") {
                  console.log(this.horario[i]);
                  this.segunda=this.horario[i];
                } else  if(this.horario[i].$key == "terca") {
                    this.terca=this.horario[i];
                  } else if (this.horario[i].$key == "quarta") {
                      this.quarta=this.horario[i];
                    } else if (this.horario[i].$key == "quinta") {
                        this.quinta=this.horario[i];
                    } else if (this.horario[i].$key == "sexta") {
                      this.sexta=this.horario[i];
                    }
                  }; this.loader.dismiss();

        });




    });


  });

}
ionViewDidLoad() {
    this.presentLoading();
  }
presentLoading() {
this.loader = this.loadingCtrl.create({
content: "A carregar...",
});

this.loader.present();
}
}
