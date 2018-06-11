import { GraphicPage } from './graphic';
import { NgModule, IonicPageModule } from '../index.paginas';

@NgModule({
  declarations: [
    GraphicPage,
  ],
  imports: [
    IonicPageModule.forChild(GraphicPage),
  ],
})
export class GraphicPageModule {}
