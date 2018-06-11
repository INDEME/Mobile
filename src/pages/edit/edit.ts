import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, ToastController, Http, Response,
  AuthSevice, CreateAskPage } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  nombre: string;
  contrasena: string;
  contrasena2: string;
  datoNombre: string;
  usuario: string;
  IdentificadorUsuario: any;
  nombreUsuario: string;
  resultado: any;

  constructor(public navCtrl: NavController,private toastCtrl:ToastController, public auth: AuthSevice, 
    public navParams: NavParams, public http:Http) {
  }

  ionViewDidLoad() {
    this.datoNombre = this.auth.NombreUsuario;
    this.IdentificadorUsuario = this.auth.idUsuario;
    this.nombreUsuario = "Hola: "+this.datoNombre;
  }

  edit(){
    if(this.contrasena != null && this.contrasena2 != null && this.contrasena == this.contrasena2){
      this.http.post('https://apex.oracle.com/pls/apex/indeme/INmodify/', {
        'contrasena': this.contrasena,
        'id_usuarios': this.IdentificadorUsuario
      }).map((response:Response)=>{
        return response.json();
      }).subscribe(
        ()=> {
        this.presentToast("Se ha modificado tu cuenta satisfactoriamente.");
      },
        (error)=>{
          this.presentToast("Error al modificar tu cuenta. Intentalo más tarde.");
        }
      )
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
