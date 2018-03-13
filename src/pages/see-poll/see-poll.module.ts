import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeePollPage } from './see-poll';

@NgModule({
  declarations: [
    SeePollPage,
  ],
  imports: [
    IonicPageModule.forChild(SeePollPage),
  ],
})
export class SeePollPageModule {}
