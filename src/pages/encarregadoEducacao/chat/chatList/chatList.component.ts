import { Component, OnInit } from '@angular/core';
import { NavController, NavParams , LoadingController} from 'ionic-angular'
import { ChatMensageComponent } from '../chatMensage/chatMensage.component'
import { ChatNewComponent } from '../chatNew/chatNew.component'
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';
import { FilterPipe2 } from './filterPipe2';
import { orderBy} from './order.ts'


@Component({
  selector: 'page-ChatListComponent',
  templateUrl: 'chatList.component.html'
})

export class ChatListComponent {
  professores:any;
  prof: any;
  term:any;
  turma: any = "-KY4Jl3N103L6kNd-liQ";
  chat: any;
  notificacao: any;
  result2: any;
  encarregados: any;
  result: any;
  loader: any;



  constructor(public navCtrl: NavController, public navParams : NavParams, public af: AngularFire, private http: Http, public loadingCtrl: LoadingController) {

  }


  ionViewWillEnter() {
      this.presentLoading();
     this.af.auth.subscribe(auth => {
  this.professores = this.af.database.list('/professores', { });
  let obs = this.professores.subscribe(res => {
    for (let i = 0; i < res.length; i++) {
      this.http.get('https://caderneta-2b6e4.firebaseio.com/professores/' + res[i].$key + '/chat/' + auth.uid + '/notificacao_enc.json').subscribe(resultado => {


                       res[i]["notificacao_enc"] = resultado.json();


                       this.chat = this.af.database.list('professores/' +  res[i].$key + '/chat/' + auth.uid, {
                            query: {
                              limitToLast:3
                            }
                       });

                       this.chat.subscribe(result => {


                          res[i]["info"] = result[0];
                          console.log(res);

                       });
                   });


               }

              this.encarregados = res;
              this.loader.dismiss();


                         });
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

  presentLoading() {
this.loader = this.loadingCtrl.create({
  content: "A carregar...",
});

this.loader.present();
}
}
