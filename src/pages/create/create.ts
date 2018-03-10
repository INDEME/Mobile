import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';


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

  IdentificadorUsuario: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthSevice, public http:Http) {
    this.IdentificadorUsuario = this.auth.idUsuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
    
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
