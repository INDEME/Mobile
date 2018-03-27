import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatePage } from '../create/create';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  usuario: number;
  numero: number;
  AskNumber : number;
  contador: number;
  aswer: string;
  Ask: any[] = [];
  array = [];
  resultado: any;
  pollsUser: any [] = [];
  

  constructor(public navCtrl: NavController, private toastCtrl:ToastController, public navParams: NavParams, private alertCtrl: AlertController, public http:Http,  public auth: AuthSevice) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsGet/').map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      console.log(this.resultado);
      // console.log(this.auth.idUsuario);
      // console.log(this.resultado.length);
      for (var i=0; i <this.resultado.length; i++){
        if(this.resultado[i].id_usuarios == this.auth.idUsuario){
          //console.log("//////////");
          //console.log(this.resultado[i].id_encuesta);
          this.pollsUser.push(this.resultado[i].id_encuesta);
        }
      }
    });
  }

  menu(encuesta_id){
    

    var myJsonString = JSON.stringify(this.pollsUser);
    console.log("///////////////");
    console.log(myJsonString);
    console.log(encuesta_id);
    console.log("///////////////");
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
        ,
        {
          type: 'radio',
          label: 'Ver resultados.',
          value: '3'
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
              //this.navCtrl.push(SeePollPage);
            }
            else if (data == "1"){
              console.log("Aplicar encuesta");
              //this.navCtrl.push(DoPoollPage);
            }
            else if (data == "2"){
              console.log("Graficar encuesta");
              //this.navCtrl.push(GraphicPage);
            }
            else if (data == "3"){
              console.log("Ver encuesta");
              //this.navCtrl.push(SeePage);
            }
            }
        }
      ]
    });
    alert.present();
  }


  create(){
    this.usuario = this.auth.idUsuario;
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
}

add(){
  console.log(this.aswer);
  if(this.Ask.length < 2){
  this.Ask.push(this.aswer);
  console.log(this.Ask[0]);
  console.log(this.Ask.length);
}
else{
  this.presentToast("No puedes agregar más.")
}
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
