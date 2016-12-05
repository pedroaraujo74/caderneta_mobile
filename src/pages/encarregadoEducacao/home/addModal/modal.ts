import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'modal',
    templateUrl: 'modal.html'
})
export class ModalEncarregandos {
    constructor(public viewCtrl : ViewController) { }



 dismiss() {
    this.viewCtrl.dismiss();
  }
}