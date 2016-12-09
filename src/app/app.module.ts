import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { MyApp } from './app.component';
import { FeedComponent } from '../pages/feed/feed.component';
import { ChatComponent2 } from '../pages/chat/chat.component';
import { HomePage } from '../pages/encarregadoEducacao/home/home';
import { DisciplinasComponent } from '../pages/encarregadoEducacao/disciplinas/disciplinas.component';
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

//PERFIL
import { PerfilComponent } from '../pages/encarregadoEducacao/perfil/perfil.component';

//CHAT
import { ChatChooseComponent } from '../pages/encarregadoEducacao/chat/chatChoose/chatChoose.component';
import { ChatListComponent } from '../pages/encarregadoEducacao/chat/chatList/chatList.component';
import { ChatMensageComponent } from '../pages/encarregadoEducacao/chat/chatMensage/chatMensage.component';
import { ChatNewComponent } from '../pages/encarregadoEducacao/chat/chatNew/chatNew.component';


const myFirebaseConfig = {
  apiKey: 'AIzaSyDMuTuGTOL0hANsZ7ZS11rY9vZtYABUVbM',
  authDomain: 'caderneta-2b6e4.firebaseapp.com',
  databaseURL: 'https://caderneta-2b6e4.firebaseio.com/',
  storageBucket: 'gs://caderneta-2b6e4.appspot.com/',
}
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
}




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

    //PERFIL
    PerfilComponent,

    //CHAT
    ChatChooseComponent,
    ChatListComponent,
    ChatMensageComponent,
    ChatNewComponent,
    

    //DISCIPLINAS
    DisciplinasComponent,

    FeedComponent,
    ChatComponent2,
    HomePage,

    
    ModalEncarregandos,
    TabsPage

  ],
  imports: [
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
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

    //PERFIL
    PerfilComponent,

    //CHAT
    ChatChooseComponent,
    ChatListComponent,
    ChatMensageComponent,
    ChatNewComponent,

    //DISCIPLINAS
    DisciplinasComponent,

    FeedComponent,
    ChatComponent2,
    HomePage,
    
    ModalEncarregandos,
    TabsPage

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
