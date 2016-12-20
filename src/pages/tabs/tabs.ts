import { Component } from '@angular/core';
import { FeedComponent } from '../encarregadoEducacao/feed/feed.component';
import { ChatListComponent} from '../encarregadoEducacao/chat/chatList/chatList.component';
import { HorarioComponent } from '../encarregadoEducacao/horario/horario.component';
import { PerfilComponent } from '../encarregadoEducacao/perfil/perfil.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = FeedComponent;
  tab2Root: any = ChatListComponent;
  tab3Root: any = HorarioComponent;
  tab4Root: any = PerfilComponent;

  constructor() {
   
  }

}
