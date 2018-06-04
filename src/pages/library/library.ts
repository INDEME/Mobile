import { Component, IonicPage, NavController, NavParams, LoadingController, ConsultaProvider
 } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  loading: any;
  nombre: string;
  public list: any = [];

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public consulta: ConsultaProvider) {
    this.loadList();
    this.loading = this.loadingCtrl.create({
      content: 'Cargando preguntas...'
  });
  this.loading.present();
  }

  search(nombre){
    return new Promise(resolve => {
      this.consulta.getListPreguntasByName(this.nombre).then(results => {
        this.list = results;
        this.loading.dismiss();
        console.log(results);
        return resolve();
      }).catch(err => {  
         console.log(err);  
        return resolve();
      });
    })
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