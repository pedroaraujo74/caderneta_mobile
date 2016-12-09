import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { ChatListComponent } from '../chatList/chatList.component'

@Component({
  selector: 'page-ChatChooseComponent',
  templateUrl: 'chatChoose.component.html'
})

export class ChatChooseComponent {

  constructor(public navCtrl: NavController, public navParams : NavParams) {

  }

  chatList(){
        this.navCtrl.push(ChatListComponent)
  }

}