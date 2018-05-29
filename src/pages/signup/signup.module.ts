import { SignupPage } from './signup';
import { NgModule, IonicPageModule } from '../index.paginas';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
})
export class SignupPageModule {}
