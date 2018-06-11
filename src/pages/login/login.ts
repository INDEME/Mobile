import 'rxjs/Rx';
import { Component, IonicPage, NavController, LoadingController, ToastController, Http, PrincipalPage,
  AuthSevice, SignupPage } from '../index.paginas';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  tabBarElement: any;
  model: any = {};
  nombre: string;
  contrasena: string;
  loading: any;
  resultado: any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private toastCtrl:ToastController, public auth: AuthSevice, public http:Http) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.loading = this.loadingCtrl.create({
      content: 'Iniciando sessión...'
  });
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
    this.loading.present();
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INgetuser/' + this.nombre +"/"+ this.contrasena).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      if(data.items.length >= 1){
        this.auth.idUsuario = this.resultado[0].id_usuarios;
        this.auth.NombreUsuario = this.resultado[0].nombres;
        this.loading.dismiss();
        this.navCtrl.push(PrincipalPage);
      }
      else{
        this.loading.dismiss();
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


