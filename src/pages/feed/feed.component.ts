import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFire } from 'angularfire2';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'feed',
  templateUrl: 'feed.component.html'
})
export class FeedComponent implements OnInit{
  title: string;
  eventDate: any;
  date: any;
  desc: any;
  type: any;
  feed: any;
  codigo: string = "-KYDz-fYCVbIAhjBLMPE";
  constructor(public navCtrl: NavController, public http:Http, public af: AngularFire) {

  }

  ngOnInit() {
      this.feed = this.af.database.list('disciplinas/-KY4Jl3N103L6kNd-liQ/feed');
  }

}
