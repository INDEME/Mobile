import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, LoadingController, Http } from '../index.paginas';

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

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.encuestaId = navParams.get('encuesta_id');
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,");
    console.log(this.encuestaId);
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
    
this.loading = this.loadingCtrl.create({
  content: 'Cargando preguntas...'
});
this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeePollPage:)');
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsSearch/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      console.log(this.resultado);
    });

    this.http.get('https://apex.oracle.com/pls/apex/indeme/INaskItems/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.askItems = data.items;
      this.loading.dismiss();
      console.log(this.askItems);
    });
  }

}
