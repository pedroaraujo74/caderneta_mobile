import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

// START
import { StartPage } from '../start/start';

//LOGIN
import { LoginPage } from '../login/login';

// REGISTO
import { RegistoPage_1 } from '../registo/registo_page1/registo1';
import { RegistoPage_2 } from '../registo/registo_page2/registo2';

//FEED
import { FeedComponent } from '../pages/encarregadoEducacao/feed/feed.component';
import { PopoverPage } from '../pages/encarregadoEducacao/feed/PopoverPage';

//PERFIL
import { PerfilComponent } from '../pages/encarregadoEducacao/perfil/perfil.component';

//CHAT
import { ChatChooseComponent } from '../pages/encarregadoEducacao/chat/chatChoose/chatChoose.component';
import { ChatListComponent } from '../pages/encarregadoEducacao/chat/chatList/chatList.component';
import { ChatMensageComponent } from '../pages/encarregadoEducacao/chat/chatMensage/chatMensage.component';
import { ChatNewComponent } from '../pages/encarregadoEducacao/chat/chatNew/chatNew.component';
//import { FilterPipe2 } from '../pages/encarregadoEducacao/chat/chatList/filterPipe2';

//NOTIFICAÇÕES
import { NotificacoesComponent } from '../pages/encarregadoEducacao/notificacoes/notificacoes.component';

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

    //FEED
    FeedComponent,
    PopoverPage,

    //PERFIL
    PerfilComponent,

    //CHAT
    ChatChooseComponent,
    ChatListComponent,
    ChatMensageComponent,
    ChatNewComponent,
    //FilterPipe2,

    //NOTIICACOES
    NotificacoesComponent,

    //TABS
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

    //FEED
    FeedComponent,
    PopoverPage,

    //CHAT
    ChatChooseComponent,
    ChatListComponent,
    ChatMensageComponent,
    ChatNewComponent,
    //FilterPipe2,

    //NOTIICACOES
    NotificacoesComponent,

    //PERFIL
    PerfilComponent,

    //TABS
    TabsPage

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
