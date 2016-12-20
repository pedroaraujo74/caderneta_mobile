import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular'


@Component({
  template: `
    <ion-list>
      <ion-list-header>Filtrar</ion-list-header>

        <ion-item>
            <ion-label>Avisos</ion-label>
            <ion-checkbox color="danger" checked="true"></ion-checkbox>
        </ion-item>
      
        <ion-item>
            <ion-label>Eventos</ion-label>
            <ion-checkbox color="yellow" style="border-color: #FFF" checked="true"></ion-checkbox>
        </ion-item>

        <ion-item>
            <ion-label>Sumários</ion-label>
            <ion-checkbox color="green" checked="true"></ion-checkbox>
        </ion-item>

        <ion-item>
            <ion-label>Trabalhos de casa</ion-label>
            <ion-checkbox color="purple" checked="true"></ion-checkbox>
        </ion-item>

    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}