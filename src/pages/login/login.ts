import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { PrincipalPage } from '../principal/principal';
import { ToastController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { AuthSevice } from '../../services/auth/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  tabBarElement: any;
  model: any = {};
  nombre: string;
  contrasena: string;

  resultado: any;

  constructor(public navCtrl: NavController, private toastCtrl:ToastController, public auth: AuthSevice, public http:Http) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }
 
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }
 
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  crearCuenta(){
    this.navCtrl.push(SignupPage);
  }

  login(){
    //console.log(this.nombre);
    //console.log(this.contrasena);
    this.http.get('http://45.55.41.252:8080/ords/indeme/INgetuser/' + this.nombre +"/"+ this.contrasena).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      //console.log(this.resultado);
      if(data.items.length >= 1){
        //this.presentToast("Acceso correcto.");
        this.auth.idUsuario = this.resultado[0].id_usuarios;
        this.auth.NombreUsuario = this.resultado[0].nombres;
        //console.log( this.auth.idUsuario);
        this.navCtrl.push(PrincipalPage);
      }
      else{
        this.presentToast("Usuario y/o contraseña incorrectos."); 
      }
    });
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


