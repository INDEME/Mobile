import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreatePage } from '../create/create';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  usuario: number;
  resultado: any;

   constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthSevice, public http:Http) {
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
}
