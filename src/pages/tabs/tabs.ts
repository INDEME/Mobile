import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CalculatorPage } from '../calculator/calculator';
import { EditPage } from '../edit/edit';
import { LibraryPage } from '../library/library';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalculatorPage;
  tab3Root = EditPage;
  tab4Root = LibraryPage;

  constructor() {

  }
}
