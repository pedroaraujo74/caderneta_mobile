import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/encarregadoEducacao/home/home';
import { Disciplinas } from '../pages/encarregadoEducacao/disciplinas/disciplinas';
import { ModalEncarregandos } from '../pages/encarregadoEducacao/home/addModal/modal';
import { TabsPage } from '../pages/tabs/tabs';

// START
import { StartPage } from '../start/start';

//LOGIN
import { LoginPage } from '../login/login';

// REGISTO
import { RegistoPage_1 } from '../registo/registo_page1/registo1';
import { RegistoPage_2 } from '../registo/registo_page2/registo2';
import { RegistoPage_3 } from '../registo/registo_page3/registo3';




@NgModule({
  declarations: [
    MyApp,

    //START
    StartPage,

    //LOGIN
    LoginPage,

    //REGISTO OR LOGIN
    RegistoPage_1,
    RegistoPage_2,
    RegistoPage_3,

    AboutPage,
    ContactPage,
    HomePage,
    Disciplinas,  
    ModalEncarregandos,
    TabsPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    //START
    StartPage,

    //LOGIN
    LoginPage,

    //REGISTO OR LOGIN
    RegistoPage_1,
    RegistoPage_2,
    RegistoPage_3,

    AboutPage,
    ContactPage,
    HomePage,
    Disciplinas,  
    ModalEncarregandos,
    TabsPage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
