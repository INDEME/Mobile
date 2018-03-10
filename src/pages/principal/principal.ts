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
  IdentificadorUsuario: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthSevice, public http:Http) {
    this.IdentificadorUsuario = this.auth.idUsuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  create(){
    this.navCtrl.push(CreatePage);
    console.log(this.IdentificadorUsuario);
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
