import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular'
import { PopoverPage } from '../feed/PopoverPage';

@Component({
  selector: 'page-FeedComponent',
  templateUrl: 'feed.component.html',
})

export class FeedComponent {

  constructor(public navCtrl: NavController, public navParams : NavParams, public popoverCtrl: PopoverController) {
    
    
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
