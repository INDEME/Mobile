import { PrincipalPage } from './principal';
import { NgModule, IonicPageModule } from '../index.paginas';

@NgModule({
  declarations: [
    PrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
  ],
})
export class PrincipalPageModule {}
