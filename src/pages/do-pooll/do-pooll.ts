import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-do-pooll',
  templateUrl: 'do-pooll.html',
})
export class DoPoollPage {
  encuestaId: any;
  resultado: any;
  askItems: any;
  inputAnswer: any;
  addAnswer: any [] = [];
  star: number;
  saturation: any;
  dimensiones: any;
  escala5: any;
  escala10: any;
  multiple: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, private toastCtrl:ToastController) {
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
    console.log(this.addAnswer);
    console.log("LA encuesta es: " +this.encuestaId);
  }

  Escala(number, idPregunta){
    console.log(number);
    console.log(idPregunta);
  }

  saveInput(idPregunta){
    console.log(this.inputAnswer);
    this.addAnswer.push(this.inputAnswer);
    console.log(idPregunta);
  }

  items(item, idPregunta){
    console.log(item);
    console.log(idPregunta);
  }

  saveFace(face, idPregunta){
    console.log(face);
    if (face == "happy"){
      this.presentToast("Carita feliz seleccionada.");
      this.addAnswer.push("happy");
    }
    else{
      this.presentToast("Carita triste seleccionada.");
      this.addAnswer.push("sad");
    }
    console.log(idPregunta);
  }

  saveStar(idPregunta){
    console.log(this.star);
    this.addAnswer.push(this.star);
    console.log(idPregunta);
  }

  saveRange(idPregunta){
    console.log(this.saturation);
    this.addAnswer.push(this.saturation);
    console.log(idPregunta);
  }

  saveDimension(idPregunta){
    console.log(this.dimensiones);
    this.addAnswer.push(this.dimensiones);
    console.log(idPregunta);
  }

  saveEscala5(idPregunta){
    console.log(this.escala5);
    this.addAnswer.push(this.escala5);
    console.log(idPregunta);
  }

  saveEscala10(idPregunta){
    console.log(this.escala10);
    this.addAnswer.push(this.escala10);
    console.log(idPregunta);
  }

  saveMulti(item, idPregunta){
    console.log(item);
    this.addAnswer.push(this.multiple);
    console.log(idPregunta);
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: ''+message ,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}