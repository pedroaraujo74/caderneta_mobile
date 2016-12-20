import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { Keyboard } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';
import { CallNumber } from 'ionic-native';
import { Shake } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { SMS } from 'ionic-native';
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
  result: any;
  mensagem: any;
  isClicked = [];
  prof: any;
  turma: any = "-KY4Jl3N103L6kNd-liQ";
  professor: any;
  eu: any;
  me: any;
  content: any;
  date: any;
  notificacao: any;
  result2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public http: Http, public alertCtrl: AlertController) {

  }



  ionViewDidEnter() {
    this.content.scrollToBottom(300);//300ms animation speed
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'SMS',
      message: "Envie uma mensagem SMS para este Professor",
      inputs: [
        {
          name: 'title',
          placeholder: 'Mensagem'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log(data);
            
            SMS.send('911049368', data.title);
          }
        }
      ]
    });
    prompt.present();
  }

  ligar() {
    CallNumber.callNumber(this.professor.telemovel, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));

  }

  ngOnInit() {

    let watch = Shake.startWatch(40).subscribe(() => {
      CallNumber.callNumber(this.professor.telemovel, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
    });



    this.af.auth.subscribe(auth => {
      this.id_prof = this.navParams.get('professor_id');
      console.log(this.id_prof);
      this.chat = this.af.database.list('professores/' + this.id_prof + '/chat/' + auth.uid);

      this.chat.subscribe(result => {
        this.result = result;

      });

      let visto = {
        notificacao_enc: false
      }
      this.http.patch('https://caderneta-2b6e4.firebaseio.com/professores/' + this.id_prof + '/chat/' + auth.uid + '.json', visto).subscribe(result => console.log(result));


      for (let i = 0; i < this.result.length; i++) {
        this.isClicked[i] = false;
        console.log(this.isClicked)
      }

      this.prof = this.af.database.object('professores/' + this.id_prof).subscribe(res => this.professor = res);
      console.log(this.prof);

      this.me = this.af.database.object('encarregados/' + auth.uid).subscribe(res => this.eu = res);
      console.log(this.eu);
    });
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
    this.af.auth.subscribe(res => {
      this.http.post('https://caderneta-2b6e4.firebaseio.com/professores/' + this.id_prof + '/chat/' + res.uid + '.json', this.body)

        .subscribe(


        data => { this.content.scrollToBottom(300); this.texto = "" },
        err =>
          () => console.log('complete')
        );
      let notificacao = {
        notificacao_prof: true
      }
      this.http.patch('https://caderneta-2b6e4.firebaseio.com/professores/' + this.id_prof + '/chat/' + res.uid + '.json', notificacao).subscribe(result => console.log(result));
    });
  }



}
