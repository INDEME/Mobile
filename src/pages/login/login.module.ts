import { LoginPage } from './login';
import { NgModule, IonicPageModule } from '../index.paginas';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
