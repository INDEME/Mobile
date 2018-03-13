import { Component } from '@angular/core';

import { PrincipalPage } from '../principal/principal';
import { CalculatorPage } from '../calculator/calculator';
import { EditPage } from '../edit/edit';
import { LibraryPage } from '../library/library';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PrincipalPage;
  tab2Root = CalculatorPage;
  tab3Root = EditPage;
  tab4Root = LibraryPage;

  constructor() {

  }
}
