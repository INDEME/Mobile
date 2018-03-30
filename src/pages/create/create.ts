import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';
import { CreateAskPage } from '../create-ask/create-ask';


/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  resultado: any;
  tipoPregunta = [];
  IdentificadorUsuario: any;
  id_encuesta: any;
  preguntas: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthSevice, public http:Http) {
    this.IdentificadorUsuario = this.auth.idUsuario;
    this.preguntas = [];
    // this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsGet/' + this.IdentificadorUsuario ).map(res => res.json()).subscribe(data => {
    //   this.resultado = data.items;
    //   console.log(this.resultado);
    //   if(data.items.length >= 1){
    //     console.log("Holaaaaaaa: "+ this.resultado[data.items.length-1].id_encuesta);
    //     this.id_encuesta = this.resultado[data.items.length-1].id_encuesta;
    //     console.log ("Hola soy la encuesta: " + this.id_encuesta);
    //   }

    //   else{
    //     console.log("id encuesta no encontrado"); 
    //   }});
    
    this.tipoPregunta = [
      {
        'id': '1',
        'title': 'Respuesta Única',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '2',
        'title': 'Respuesta Múltiple',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
        
      },
      {
        'id': '5',
        'title': 'Evaluación',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '6',
        'title': 'Emoción',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '3',
        'title': 'Información',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '4',
        'title': 'Escala',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '7',
        'title': 'Abierta',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '23',
        'title': 'Slider de Cursor',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '21',
        'title': 'Respuesta Matriz',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '22',
        'title': '2 Dimensiones',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
    ]
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(CreateAskPage, { item: item });
  }

  // GetAsk(){
  //   this.http.get("https://apex.oracle.com/pls/apex/indeme/INpolls/")
  //   .map(response => this.preguntas = response.json().items);
  // }

  // OnSave(){
  //   console.log(this.id_encuesta + "La encuesta es:");
  //   this.http.post('https://apex.oracle.com/pls/apex/indeme/INpolls/', {
  //     'id_encuesta': this.id_encuesta,
  //     'id_tipo': this.tipoPregunta,
      
  //   }).map((response:Response)=>{
  //     return response.json();
  //   }).subscribe(
  //     ()=> {console.log("Success");
  //   },
  //     (error)=>{
  //       console.log('error');
  //     }
  //   )
  // }
}
