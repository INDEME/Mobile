import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';

/**
 * Generated class for the CreateAskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-ask',
  templateUrl: 'create-ask.html',
})
export class CreateAskPage {
  item;
  resultado: any;
  resultAsk: any;
  id_encuesta: any;
  id_tipo: any;
  id_pregunta: any;
  IdentificadorUsuario: any;
  pregunta: any;
  noAsks: number;
  asks: any;
  askSlider: any;
  answer: any;
  askSliderCount: number;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams, public http:Http, public auth: AuthSevice) {
    this.IdentificadorUsuario = this.auth.idUsuario;
    this.item = navParams.data.item;
    this.id_tipo = this.navParams.data.item.id;
    this.asks = []; 
    this.askSlider = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAskPage');
  }

  presentPrompt() {
  }

  OnSave(){
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpolls/' + this.IdentificadorUsuario +"/").map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      
      if(data.items.length >= 1){
        console.log("Holaaaaaaa: "+ this.resultado[data.items.length-1].id_encuesta);
        this.id_encuesta = this.resultado[data.items.length-1].id_encuesta;
      }

      else{
        console.log("id encuesta no encontrado"); 
      }

    });

    this.http.post('https://apex.oracle.com/pls/apex/indeme/INask/', {
      'id_encuesta': this.id_encuesta,
      'id_tipo': this.id_tipo,
      'pregunta': this.pregunta
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
  addAskOption(){
    console.log(this.answer);
    this.asks.push(this.answer);
    console.log(this.asks[0]);
  }
  addAskSlider(){
    
    this.askSliderCount = this.answer + 1;
    
  }
  SaveAnswer(){
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INask/' + this.IdentificadorUsuario +"/"+this.id_tipo +"/").map(res => res.json()).subscribe(data => {
      this.resultAsk = data.items;
      
      if(data.items.length >= 1){
        console.log("Pregunta noumero: "+ this.resultAsk[data.items.length-1].id_pregunta);
        this.id_pregunta = this.resultAsk[data.items.length-1].id_pregunta;
      }

      else{
        console.log("pregunta no encontrada"); 
      }

    });
    /*
    for(var i=0; i < this.asks.length; i++){
      this.http.post('https://apex.oracle.com/pls/apex/indeme/INanswer/', {
        'id_encuesta': this.id_encuesta,
        'id_pregunta': this.id_pregunta,
        'respuesta': this.asks[i]
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
  */
  }
}