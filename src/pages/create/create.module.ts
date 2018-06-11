import { CreatePage } from './create';
import { NgModule, IonicPageModule } from '../index.paginas';

@NgModule({
  declarations: [
    CreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePage),
  ],
})
export class CreatePageModule {}
