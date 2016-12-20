import { Component, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController, AlertController } from 'ionic-angular';
import { PopoverPage } from '../feed/PopoverPage';
import { AngularFire } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-FeedComponent',
  templateUrl: 'feed.component.html',
})

export class FeedComponent {
  loader:any;
  dados: any;
  testRadioOpen: boolean;
  testRadioResult;
  feedRef: any;
  loadedFeed: any;
  listFeed: any;
  ordenar: any;

  constructor(public navCtrl: NavController, public navParams : NavParams, public popoverCtrl: PopoverController, public af: AngularFire , public loadingCtrl: LoadingController, public http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.presentLoading();
  }

  presentLoading() {
  this.loader = this.loadingCtrl.create({
    content: "A carregar...",
  });

  this.loader.present();
  }

  ngOnInit(){
    this.carregarCodigo();
  }


  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Filtrar');

    alert.addInput({
      type: 'radio',
      label: 'Todos',
      value: '5',
      checked: false,
      id:'teste'
    });
    alert.addInput({
      type: 'radio',
      label: 'Avisos',
      value: '4',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Trabalhos de Casa',
      value: '2',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Sumários',
      value: '1',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Eventos',
      value: '3',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.initializeItems();

        var valor = data;
        if(valor==5) {
          this.initializeItems();
        } else {

        this.listFeed = this.listFeed.filter((v) => {
          if(v.type && valor) {
            if (v.type == valor ) {
              return true;
            }
            return false;
          }
        });
  }

      }
    });
    alert.present();
  }


  carregarCodigo(){
      this.af.auth.subscribe(res => {
          this.http.get('https://caderneta-2b6e4.firebaseio.com/encarregados/' + res.uid + '/codigo_disciplina.json').map(res => res.json()).subscribe(codigo => {
          this.af.database.list('turmas/'+codigo+'/feed', {
          query: {
                    orderByChild: 'eventDate',
                  }
              }).subscribe(data =>{

              this.ordenar = data;

              this.ordenar.sort(function(a, b){
                  if(a.dateCreation > b.dateCreation) return -1;
                  if(a.dateCreation < b.dateCreation) return 1;
                  return 0;
              })

              this.listFeed = this.ordenar;
              this.loadedFeed = this.ordenar;
              
              this.loader.dismiss();
              })
          });
          
        });
        
  }

  initializeItems(){
      this.listFeed = this.loadedFeed;
  }

  getItems(searchbar) {
      this.initializeItems();

      var q = searchbar.srcElement.value;

      if (!q) {
        return;
      }

      this.listFeed = this.listFeed.filter((v) => {
        if(v.disciplina && q) {
          if (v.disciplina.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.createdBy.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.desc.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });

      console.log(q, this.listFeed.length);

    }

  filtrar(val){
      this.initializeItems();

      var valor = val;
      if(valor==5) {
        this.initializeItems();
      } else {

      this.listFeed = this.listFeed.filter((v) => {
        if(v.type && valor) {
          if (v.type == valor ) {
            return true;
          }
          return false;
        }
      });
}
  }

}
