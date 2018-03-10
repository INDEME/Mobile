import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAskPage } from './create-ask';

@NgModule({
  declarations: [
    CreateAskPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAskPage),
  ],
})
export class CreateAskPageModule {}
