import { Component, IonicPage, NavController, NavParams, LoadingController, ConsultaProvider
 } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  loading: any;
  public list: any = [];

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public consulta: ConsultaProvider) {
    this.loadList();
    this.loading = this.loadingCtrl.create({
      content: 'Cargando preguntas...'
  });
  this.loading.present();
  }

  loadList() {
    return new Promise(resolve => {
      this.consulta.getListPreguntas().then(results => {
        this.list = results;
        this.loading.dismiss();
        return resolve();
      }).catch(err => {    
        return resolve();

      });
    })
  }
}