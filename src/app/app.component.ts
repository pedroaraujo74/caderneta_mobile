import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { StartPage } from '../start/start';
// import { RegistoSocial } from '../registo/registo_social/registo_social';
// import { RegistoPage_2 } from '../registo/registo_page2/registo2';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {
  
  rootPage = StartPage;
  
  constructor(platform: Platform) {
    
    platform.ready().then(() => {

      Splashscreen.hide();

      StatusBar.overlaysWebView(true);
      StatusBar.backgroundColorByHexString('#15A9FC')
      
    });

  }
}
