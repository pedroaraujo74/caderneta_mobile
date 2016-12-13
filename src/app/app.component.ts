import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//import { TabsPage } from '../pages/tabs/tabs';

import { StartPage } from '../start/start';

//import { RegistoPage_2 } from '../registo/registo_page2/registo2';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})

export class MyApp {
  
  rootPage = StartPage;
  
  constructor(platform: Platform) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      Splashscreen.hide();

      StatusBar.overlaysWebView(true);
      StatusBar.backgroundColorByHexString('#15A9FC')
      
    });

  }
}
