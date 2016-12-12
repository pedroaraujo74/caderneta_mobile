import { Component , OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { ChatListComponent } from '../chatList/chatList.component'
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';

@Component({
  selector: 'page-ChatChooseComponent',
  templateUrl: 'chatChoose.component.html'
})

export class ChatChooseComponent implements OnInit {
  alunos: any;
  
  constructor(public navCtrl: NavController, public navParams : NavParams, public af: AngularFire, public http: Http) {

  }

  ngOnInit () {
    this.alunos = this.http.get('https://caderneta-2b6e4.firebaseio.com/encarregados/CnSVr7jJBDfJ3PHInO2WZbcR5Ew2.json').subscribe(data => {
          this.alunos = data.json();
         console.log(this.alunos);
});
}


  chatList(){
        this.navCtrl.push(ChatListComponent)
  }

}
