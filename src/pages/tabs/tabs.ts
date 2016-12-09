import { Component } from '@angular/core';
import { HomePage } from '../encarregadoEducacao/home/home';
import { FeedComponent } from '../feed/feed.component';
import { ChatChooseComponent } from '../encarregadoEducacao/chat/chatChoose/chatChoose.component';
import { PerfilComponent } from '../encarregadoEducacao/perfil/perfil.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FeedComponent;
  tab3Root: any = ChatChooseComponent;
  tab4Root: any = PerfilComponent;

  constructor() {
      
  }
}
