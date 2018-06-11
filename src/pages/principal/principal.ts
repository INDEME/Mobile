import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, ToastController, Http, Response,
  AuthSevice, CreateAskPage, LoadingController, CreatePage, ResultpollsPage, DoPoollPage,
  SeePollPage, GraphicPage, AlertController } from '../index.paginas';

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
  loading: any;
  

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private toastCtrl:ToastController, public navParams: NavParams, private alertCtrl: AlertController, public http:Http,  public auth: AuthSevice) {
  this.loading = this.loadingCtrl.create({
  content: 'Cargando tus encuestas...'});
  this.loading.present();
  }

  ionViewDidLoad() {
    this.usuario = this.auth.idUsuario;
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsGet/'+ this.auth.idUsuario).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      this.loading.dismiss();
    });
  }

  menu(encuesta_id){
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
          label: 'Ver resultados.',
          value: '2'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: (data:string) => {
            if (data == "0"){
              this.navCtrl.push(SeePollPage, {encuesta_id});
            }
            else if (data == "1"){
              this.navCtrl.push(DoPoollPage, {encuesta_id});
            }
            else if (data == "2"){
              this.navCtrl.push(ResultpollsPage, {encuesta_id});
            }
            }
        }
      ]
    });
    alert.present();
  }


  create(){
    this.usuario = this.auth.idUsuario;
    this.http.post('https://apex.oracle.com/pls/apex/indeme/INpolls/', {
      'id': this.usuario
    }).map((response:Response)=>{
      return response.json();
    })
    this.navCtrl.push(CreatePage);
}

add(){
  if(this.Ask.length < 2){
  this.Ask.push(this.aswer);
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
