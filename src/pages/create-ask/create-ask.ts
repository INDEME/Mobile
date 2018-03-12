import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  id_encuesta: any;
  id_tipo: any;
  IdentificadorUsuario: any;
  pregunta: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public auth: AuthSevice) {
    this.IdentificadorUsuario = this.auth.idUsuario;
    this.item = navParams.data.item;
    this.id_tipo = this.navParams.data.item.id;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAskPage');
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
}
