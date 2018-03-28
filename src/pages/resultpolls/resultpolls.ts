import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';

/**
 * Generated class for the ResultpollsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultpolls',
  templateUrl: 'resultpolls.html',
})
export class ResultpollsPage {
  encuestaId: any;
  resultado2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.encuestaId = navParams.get('encuesta_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultpollsPage');
    console.log("000000000000000");
    console.log(this.encuestaId);
    console.log("000000000000000");
    console.log("D");
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INaskResult/').map(res => res.json()).subscribe(data => {
      this.resultado2 = data.items;
      console.log(this.resultado2);
    });
  }

}
