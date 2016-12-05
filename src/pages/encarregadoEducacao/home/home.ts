import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disciplinas } from '../disciplinas/disciplinas';

import { ModalEncarregandos } from '../home/addModal/modal';
import { ModalController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  encarregandos: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

      this.encarregandos =  [
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
   
  } 



  openDisciplinas(event, item) {
    this.navCtrl.push(Disciplinas, {
      encarregando_id: item,
    
    });
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalEncarregandos);
    modal.present();
  }
  
}


 