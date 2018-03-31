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
  resultado: any;
  askItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.encuestaId = navParams.get('encuesta_id');
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,:)");
    console.log(this.encuestaId);
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:)");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeePollPage:)');
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsSearch/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      console.log(this.resultado);
     
    });

    this.http.get('https://apex.oracle.com/pls/apex/indeme/INaskItems/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.askItems = data.items;
      console.log(this.askItems);
    });
  }

  doPoll(){
    console.log(this.resultado.length);
  }

  Escala(number){
    console.log(number);
  }

}