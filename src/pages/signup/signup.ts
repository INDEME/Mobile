import 'rxjs/Rx';
import { Component, NavController, ToastController, Http, Response, FormBuilder,
  LoginPage } from '../index.paginas';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  tabBarElement: any;
  email: string;
  contrasena: string;
  contrasena2: string;
  nombre: string;

  resultado: any;
  resultadoUser: any;

  constructor(public navCtrl: NavController , private toastCtrl:ToastController, public http:Http,  
    public formBuilder: FormBuilder) {
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


  register(){
    if(this.email != null && this.nombre != null && this.contrasena != null && this.contrasena2 != null){
        this.http.post('https://apex.oracle.com/pls/apex/indeme/INcreate/', {
          'correo': this.email,
          'nombres': this.nombre,
          'contrasena': this.contrasena
        }).map((response:Response)=>{
          return response.json();
        }).subscribe(
          er =>  this.presentToast('Usuario registrado correctamente.'),
        )
        }
    else{
    this.presentToast('Rellena todos los campos de manera correcta.');
  }
}

  comprobacion(){
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INgetuser/' + this.nombre +"/"+ this.contrasena).map(res => res.json()).subscribe(data => {
      this.resultadoUser = data.items;
      if(data.items.length >= 1){
        this.navCtrl.push(LoginPage);
       }
      else{
        this.presentToast("Usuario no registrado. Intentelo mas tarde."); 
      }
    });
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message + "" ,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}
