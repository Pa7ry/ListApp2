import { Component } from '@angular/core';

import { NewListPage } from '../newList/newList';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewListPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
