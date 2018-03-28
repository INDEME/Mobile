import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';


@IonicPage()
@Component({
  selector: 'page-do-pooll',
  templateUrl: 'do-pooll.html',
})
export class DoPoollPage {
  encuestaId: any;
  resultado : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.encuestaId = navParams.get('encuesta_id');
    console.log("***************************");
    console.log(this.encuestaId);
    console.log("***************************");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoPoollPage');
    this.http.get('http://45.55.41.252:8080/ords/indeme/INpolls/').map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      console.log(this.resultado);
      
    });
  }

}
