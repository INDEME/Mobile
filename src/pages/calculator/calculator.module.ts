import { CalculatorPage } from './calculator';
import { NgModule, IonicPageModule } from '../index.paginas';

@NgModule({
  declarations: [
    CalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculatorPage),
  ],
})
export class CalculatorPageModule {}
