import { Component, NavController, LoginPage } from '../index.paginas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.setRoot(LoginPage);
  }
  
 ngOnInit(){

  this.navCtrl.setRoot(LoginPage);
 }
  showProfilePage(){
    this.navCtrl.push(LoginPage);
  }

  
}
