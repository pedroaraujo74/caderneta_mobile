import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'chat',
  templateUrl: 'chat.component.html'
})
export class ChatComponent2 implements OnInit {
  texto: any;
  body: any;
  user: any;
  chat: any;
  codigo: string = "-KY4Jl3N103L6kNd-liQ";
  constructor(public navCtrl: NavController, public http: Http, public af: AngularFire) {

  }

  ngOnInit() {


    this.af.auth.subscribe(res => {
      this.user = res;
      this.chat = this.af.database.list('encarregados/' + this.user.uid + '/chat');
    })
  }
  enviar() {



    this.body = {

      from: 1,
      mensagem: this.texto
    }



    this.http.post('https://caderneta-2b6e4.firebaseio.com/encarregados/' + this.user.uid + '/chat.json', this.body)

      .subscribe(
      data => this.texto = "",
      err =>
        () => console.log('complete')
      );

  }


}
