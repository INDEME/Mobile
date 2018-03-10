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

  tipoPregunta = [];
  IdentificadorUsuario: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthSevice, public http:Http) {
    this.IdentificadorUsuario = this.auth.idUsuario;
    this.tipoPregunta = [
      {
        'id': '1',
        'title': 'Respuesta Única',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '2',
        'title': 'Respuesta Múltiple',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '5',
        'title': 'Evaluación',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '6',
        'title': 'Emoción',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '3',
        'title': 'Información',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '4',
        'title': 'Escala',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '7',
        'title': 'Abierta',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '23',
        'title': 'Slider de Cursor',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '21',
        'title': 'Respuesta Matriz',
        'icon': '',
        'color': '#0CA9EA'
      },
      {
        'id': '22',
        'title': '2 Dimensiones',
        'icon': '',
        'color': '#0CA9EA'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
    
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(CreateAskPage, { item: item });
  }

  OnSave(){
    this.http.post('https://apex.oracle.com/pls/apex/indeme/INpolls/', {
      'id': this.IdentificadorUsuario
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
