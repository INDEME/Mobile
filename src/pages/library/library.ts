import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaProvider} from '../../providers/consulta/consulta';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  public list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public consulta: ConsultaProvider) {
    this.loadList();
  }

  loadList() {
    return new Promise(resolve => {
      this.consulta.getListPreguntas().then(results => {
        this.list = results;
        //console.log(this.list);
        return resolve();

      }).catch(err => {        
        console.log(err);
        return resolve();

      });
    })
  }

  doRefresh(refresher) {
    this.loadList().then(() => refresher.complete());
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}