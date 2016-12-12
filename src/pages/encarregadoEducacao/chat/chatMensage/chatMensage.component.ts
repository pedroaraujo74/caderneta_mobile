import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { Keyboard } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';

@Component({
  selector: 'page-ChatChooseComponent',
  templateUrl: 'chatMensage.component.html',
  queries: {
    content: new ViewChild('content')
  }
})

export class ChatMensageComponent implements OnInit {


  id_prof: any;
  texto: any;
  user: any;
  chat: any;
  body: any;
  mensagem: any;
  prof: any;
  turma: any = "-KY4Jl3N103L6kNd-liQ";
  professor: any;
  eu: any;
  me: any;
  content : any;
  data: any;
  constructor(public navCtrl: NavController, public navParams : NavParams, public af: AngularFire, public http: Http) {

  }

  ionViewDidEnter() {
  this.content.scrollToBottom(300);//300ms animation speed
}

  ngOnInit() {


      this.id_prof = this.navParams.get('professor_id');
      console.log(this.id_prof);
      this.chat = this.af.database.list('professores/' + this.id_prof + '/chat/CnSVr7jJBDfJ3PHInO2WZbcR5Ew2');
      console.log(this.chat);

      this.prof = this.af.database.object('professores/' + this.id_prof).subscribe(res => this.professor=res);
      console.log(this.prof);

      this.me = this.af.database.object('encarregados/CnSVr7jJBDfJ3PHInO2WZbcR5Ew2').subscribe(res => this.eu=res);
      console.log(this.eu);
  }


  addZero(i) {


      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }


  enviar() {
    
    var d = new Date();
    var h = this.addZero(d.getHours());
    var m = this.addZero(d.getMinutes());



   let hora = h + ":" + m;
   console.log(hora);

   this.body = {
     from: 1,
     mensagem: this.texto,
     data: hora
}

        this.http.post('https://caderneta-2b6e4.firebaseio.com/professores/' + this.id_prof + '/chat/CnSVr7jJBDfJ3PHInO2WZbcR5Ew2' + '.json', this.body)

            .subscribe(


            data => {  this.content.scrollToBottom(300); this.texto = ""},
            err =>
                () => console.log('complete')
            );
  }
  hideTabs(){

  }

}
