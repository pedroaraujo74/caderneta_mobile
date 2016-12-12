import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { ChatMensageComponent } from '../chatMensage/chatMensage.component'
import { ChatNewComponent } from '../chatNew/chatNew.component'
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';
import { FilterPipe2 } from './filterPipe2'

@Component({
  selector: 'page-ChatListComponent',
  templateUrl: 'chatList.component.html'
})

export class ChatListComponent {
  professores:any;
  prof: any;
  turma: any = "-KY4Jl3N103L6kNd-liQ";

  constructor(public navCtrl: NavController, public navParams : NavParams, public af: AngularFire) {

  }

  ngOnInit() {
  this.professores = this.af.database.list('/professores', {
});




  }

  chatMensage(event, item){
      this.navCtrl.push(ChatMensageComponent, {
      professor_id: item,

    });

  }

  chatNew(){
      this.navCtrl.push(ChatNewComponent)
  }

}
