import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisciplinasComponent } from '../disciplinas/disciplinas.component';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

import { ModalEncarregandos } from '../home/addModal/modal';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  encarregandos: any;
  encarregado : any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public af: AngularFire) {

    this.encarregandos = [
      {
        id: 0,
        nome: "Pedro Araújo"
      },
      {
        id: 1,
        nome: "André Martins"
      },
      {
        id: 2,
        nome: "Vasco Silva"
      }
    ]

    this.encarregado = this.af.database.list('/Encarregados', {
      query: {
        orderByChild: "codigo_disciplina",
        equalTo: "-KY4Jl3N103L6kNd-liQ"
      }
    });

      this.encarregado.subscribe(res => {
        console.log(res);
      })

  }



  openDisciplinas(event, item) {
    this.navCtrl.push(DisciplinasComponent, {
      encarregando_id: item,

    });
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalEncarregandos);
    modal.present();
  }

}


