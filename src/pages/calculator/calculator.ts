import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

 

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  calcularMuestra(){
    
  }




  presentToast(resultadoFinal: number) {
    let toast = this.toastCtrl.create({
      message: 'Resultado: ' + resultadoFinal,
      duration: 3000,
      position: 'middle'
    });
  
  
    toast.present();
  }
}
