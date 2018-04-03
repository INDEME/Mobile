import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemGroup } from 'ionic-angular';
import { Http, Response } from '@angular/http';
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
  addIdPreguntas: any [] = [];
  star: number;
  saturation: any;
  dimensiones: any;
  escala5: any;
  escala10: any;
  multiple: any;
  multi: any;

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
    console.log(this.addAnswer.length);
    console.log(this.addAnswer);
    console.log(this.addIdPreguntas);
    console.log("LA encuesta es: " +this.encuestaId);

    if(this.resultado.length == this.addAnswer.length && this.addAnswer.length == this.addIdPreguntas.length){
      console.log("Vamo a guardar");

      for(var i=0; i < this.resultado.length+1; i++){
        this.http.post('https://apex.oracle.com/pls/apex/indeme/INresultAdd/', {
          'id_encuesta': this.encuestaId,
          'id_pregunta': this.addIdPreguntas[i],
          'resultado': this.addAnswer[i]
        }).map((response:Response)=>{
          return response.json();
        }).subscribe(
          ()=> {console.log("Success");
        },
          (error)=>{
            console.log('error');
          }
        )
      }
    }
    else{
      this.presentToast("Asegurate de haber contestado cada una de las preguntas.")
    }
  }

  Escala(number, idPregunta){
    console.log(number);
    this.addAnswer.push(number);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
  }

  saveInput(idPregunta){
    console.log(this.inputAnswer);
    this.addAnswer.push(this.inputAnswer);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
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
    this.addIdPreguntas.push(idPregunta);
  }

  saveStar(idPregunta){
    console.log(this.star);
    this.addAnswer.push(this.star);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
  }

  saveRange(idPregunta){
    console.log(this.saturation);
    this.addAnswer.push(this.saturation);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
  }

  saveDimension(idPregunta){
    console.log(this.dimensiones);
    this.addAnswer.push(this.dimensiones);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
  }

  saveEscala5(idPregunta){
    console.log(this.escala5);
    this.addAnswer.push(this.escala5);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
  }

  saveEscala10(idPregunta){
    console.log(this.escala10);
    this.addAnswer.push(this.escala10);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
  }

  saveMulti(item, idPregunta){
    console.log(item);
    console.log(this.multi);
    this.addAnswer.push(this.multi);
    console.log(idPregunta);
    this.addIdPreguntas.push(idPregunta);
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