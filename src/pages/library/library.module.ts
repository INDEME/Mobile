import { LibraryPage } from './library';
import { NgModule, IonicPageModule } from '../index.paginas';

@NgModule({
  declarations: [
    LibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryPage),
  ],
})
export class LibraryPageModule {}
