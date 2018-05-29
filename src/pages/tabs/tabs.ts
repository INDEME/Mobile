import { Component, HomePage, CalculatorPage, EditPage, LibraryPage  } from '../index.paginas';

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
