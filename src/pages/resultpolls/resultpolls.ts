import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, LoadingController, Http } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-resultpolls',
  templateUrl: 'resultpolls.html',
})
export class ResultpollsPage {
  encuestaId: any;
  resultado2: any;
  loading: any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.encuestaId = navParams.get('encuesta_id');
    this.loading = this.loadingCtrl.create({
      content: 'Cargando resultados...'
  });
  this.loading.present();
  }

  ionViewDidLoad() {
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INaskResult/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.resultado2 = data.items;
      this.loading.dismiss();
    });
  }

}
