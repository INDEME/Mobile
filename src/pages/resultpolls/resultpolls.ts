import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, LoadingController, Http, ConsultaProvider } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-resultpolls',
  templateUrl: 'resultpolls.html',
})
export class ResultpollsPage {
  encuestaId: any;
  resultado2: any;
  loading: any;
  nombre: string;


  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public consulta: ConsultaProvider, public http:Http) {
    this.encuestaId = navParams.get('encuesta_id');
    this.loading = this.loadingCtrl.create({
      content: 'Cargando resultados...'
  });
  this.loading.present();
  }

  ionViewDidLoad() {
    this.http.get('https://apex.oracle.com/pls/apex/indeme/IN/askAll/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.resultado2 = data.items;
      this.loading.dismiss();
    });
  }

  search(nombre){
    return new Promise(resolve => {
      this.consulta.getListResult(this.encuestaId, this.nombre).then(results => {
        this.resultado2 = results;
        return resolve();
      }).catch(err => {  
        return resolve();
      });
    })
  }
}