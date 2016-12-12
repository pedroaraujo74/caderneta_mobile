import { Component } from '@angular/core';
import { FeedComponent } from '../encarregadoEducacao/feed/feed.component';
import { ChatChooseComponent } from '../encarregadoEducacao/chat/chatChoose/chatChoose.component';
import { NotificacoesComponent } from '../encarregadoEducacao/notificacoes/notificacoes.component';
import { PerfilComponent } from '../encarregadoEducacao/perfil/perfil.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root: any = FeedComponent;
  tab2Root: any = ChatChooseComponent;
  tab3Root: any = NotificacoesComponent;
  tab4Root: any = PerfilComponent;

  constructor() {
      
  }
}
