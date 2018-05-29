import { Component, IonicPage, NavController, NavParams, ToastController } from '../index.paginas';


@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  poblacionValor: number;
  errorValor: number;
  nivelValor: number;
  POBLACIONVALOR2: number;
  ERRORVALOR2: number;
  NIVELVALOR2: number;
  RESULTADO: string;
  confianza:  number;
  CONFIANZA2: number;
  E: number;
  EN: number;
  Z: number;
  RESULTADOP: number;
  private P = 0.5;
  private DIVISOR: number;
  PROCENTAJE: number;
  PARTE1: number;
  PARTE2: number;
  DIVIDIENDO: number;
  TOTAL: number;
  totalResultado: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  calcularMuestra(){
    this.ERRORVALOR2 = Number(this.errorValor);
    this.POBLACIONVALOR2 = Number(this.poblacionValor);
    this.NIVELVALOR2 = Number(this.nivelValor);
    this.CONFIANZA2 = Number(this.confianza);
    /////////////////////////////////
    this.PROCENTAJE = this.ERRORVALOR2 / 100;
    this.E = Math.pow(this.PROCENTAJE, 2);
    this.EN = this.E * this.POBLACIONVALOR2;
    this.Z = Math.pow(this.CONFIANZA2, 2);
    this.RESULTADOP = this.P * (1 - this.P);
    this.PARTE1 = (this.Z * this.RESULTADOP) ;
    ///////////////////////////////////////
    this.DIVISOR = this.PARTE1 / this.E;
    this.DIVIDIENDO = 1 + (this.PARTE1 / (this.E * this.POBLACIONVALOR2));
    this.TOTAL = Math.round(this.DIVISOR / this.DIVIDIENDO);
    /////////////////////////////////////
    this.presentToast(this.TOTAL);
    this.totalResultado = String(this.TOTAL);
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
