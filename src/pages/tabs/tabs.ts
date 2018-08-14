import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { notificationPage } from '../notification/notification';
import { AdminPage } from '../admin/admin';
import {ChatPage} from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab2Root = notificationPage;
  tab3Root=AdminPage;
  tab4Root = ChatPage;

  constructor() {

  }
}
