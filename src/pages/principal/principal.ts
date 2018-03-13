import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatePage } from '../create/create';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';
import { AlertController } from 'ionic-angular';
import { DoPoollPage } from '../do-pooll/do-pooll';
import { GraphicPage } from '../graphic/graphic';
import { SeePollPage } from '../see-poll/see-poll';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  usuario: number;
  resultado: any;

   constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, public auth: AuthSevice, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
    this.usuario = this.auth.idUsuario;
  }

  getPollsId(){
  
  }

  create(){
    console.log(this.usuario);
    this.http.post('https://apex.oracle.com/pls/apex/indeme/INpolls/', {
      'id': this.usuario
    }).map((response:Response)=>{
      return response.json();
      //console.log (response.json());
    }).subscribe(
      ()=> {console.log("Success");
      
    },
      (error)=>{
        console.log('error'+ error);
        
      }
    )
    this.getPollsId();
    this.navCtrl.push(CreatePage);

}

option(){
  let alert = this.alertCtrl.create({
    title: '¿Qué deseas hacer?',
    inputs: [
      {
        type: 'radio',
        label: 'Visualizar encuesta.',
        value: '0'
      },
      {
        type: 'radio',
        label: 'Aplicar encuesta.',
        value: '1'
      },
      {
        type: 'radio',
        label: 'Graficar resultados.',
        value: '2'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: (data:string) => {
          console.log(data);
          if (data == "0"){
            console.log("Visualizar encuesta");
            this.navCtrl.push(SeePollPage);
          }
          else if (data == "1"){
            console.log("Aplicar encuesta");
            this.navCtrl.push(DoPoollPage);
          }
          else if (data == "2"){
            console.log("Graficar encuesta");
            this.navCtrl.push(GraphicPage);
          }
          }
      }
    ]
  });
  alert.present();
}
}
