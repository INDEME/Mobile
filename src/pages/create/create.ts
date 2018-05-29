import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, ToastController, Http, Response,
          AuthSevice, CreateAskPage } from '../index.paginas';


@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  resultado: any;
  tipoPregunta = [];
  IdentificadorUsuario: any;
  id_encuesta: any;
  preguntas: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthSevice, public http:Http) {
    this.IdentificadorUsuario = this.auth.idUsuario;
    this.preguntas = [];    
    this.tipoPregunta = [
      {
        'id': '2',
        'title': 'Respuesta Múltiple',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
        
      },
      {
        'id': '5',
        'title': 'Evaluación',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '6',
        'title': 'Emoción',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '3',
        'title': 'Información',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '4',
        'title': 'Escala',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '7',
        'title': 'Abierta',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '23',
        'title': 'Slider de Cursor',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '21',
        'title': 'Respuesta Matriz',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
      {
        'id': '22',
        'title': '2 Dimensiones',
        'icon': '',
        'color': '#0CA9EA',
        'id_encuesta': this.id_encuesta
      },
    ]
  }
 
  openNavDetailsPage(item) {
    this.navCtrl.push(CreateAskPage, { item: item });
  }
}
