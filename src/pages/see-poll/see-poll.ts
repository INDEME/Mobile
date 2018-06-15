import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, LoadingController, Http, ConsultaProvider } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-see-poll',
  templateUrl: 'see-poll.html',
})
export class SeePollPage {
  encuestaId: any;
  resultado: any;
  askItems: any;
  loading: any;
  pregunta: string;

  constructor(public consulta: ConsultaProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.encuestaId = navParams.get('encuesta_id');
this.loading = this.loadingCtrl.create({
  content: 'Cargando preguntas...'
});
this.loading.present();
  }

  ionViewDidLoad() {
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsSearch/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
    });

    this.http.get('https://apex.oracle.com/pls/apex/indeme/INaskItems/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.askItems = data.items;
      this.loading.dismiss();
    });
  }

  search(pregunta){
    return new Promise(resolve => {
      this.consulta.getListSeeAsk(this.encuestaId, this.pregunta).then(results => {
        this.resultado = results;
        return resolve();
      }).catch(err => {  
        return resolve();
      });
    })
  }

}
