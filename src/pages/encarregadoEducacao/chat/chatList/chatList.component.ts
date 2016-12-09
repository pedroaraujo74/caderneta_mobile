import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { ChatMensageComponent } from '../chatMensage/chatMensage.component'
import { ChatNewComponent } from '../chatNew/chatNew.component'

@Component({
  selector: 'page-ChatListComponent',
  templateUrl: 'chatList.component.html'
})

export class ChatListComponent {

  constructor(public navCtrl: NavController, public navParams : NavParams) {

  }

  chatMensage(){
      this.navCtrl.push(ChatMensageComponent)
  }

  chatNew(){
      this.navCtrl.push(ChatNewComponent)
  }

}
