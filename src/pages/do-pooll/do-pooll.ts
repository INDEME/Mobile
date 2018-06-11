import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, ToastController, Http, Response,
  LoadingController } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-do-pooll',
  templateUrl: 'do-pooll.html',
})
export class DoPoollPage {
  encuestaId: any;
  resultado: any;
  askItems: any;
  inputAnswer: any;
  addAnswer: any [] = [];
  addIdPreguntas: any [] = [];
  star: number;
  saturation: any;
  dimensiones: any;
  escala5: any;
  escala10: any;
  multiple: any;
  multi: any;
  loading: any;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public http:Http, private toastCtrl:ToastController) {
    this.encuestaId = navParams.get('encuesta_id');
    this.loading = this.loadingCtrl.create({
      content: 'Cargando preguntas...'
  });
  this.loading.present();
  }

  ionViewDidLoad() {
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsSearch/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
    });

    this.http.get('https://apex.oracle.com/pls/apex/indeme/INaskItems/' + this.encuestaId).map(res => res.json()).subscribe(data => {
      this.askItems = data.items;
      this.loading.dismiss();
    });
  }

  doPoll(){
    if(this.resultado.length == this.addAnswer.length && this.addAnswer.length == this.addIdPreguntas.length){
      for(var i=0; i < this.resultado.length+1; i++){
        this.http.post('https://apex.oracle.com/pls/apex/indeme/INresultAdd/', {
          'id_encuesta': this.encuestaId,
          'id_pregunta': this.addIdPreguntas[i],
          'resultado': this.addAnswer[i]
        }).map((response:Response)=>{
          return response.json();
        }).subscribe(
          ()=> {
        },
          (error)=>{
          }
        )
      }
    }
    else{
      this.presentToast("Asegurate de haber contestado cada una de las preguntas.")
    }
  }

  Escala(number, idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    this.addAnswer.push(number);
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
  }
}

  saveInput(idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    this.addAnswer.push(this.inputAnswer);
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
  }
}

  saveFace(face, idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    if (face == "happy"){
      this.presentToast("Carita feliz seleccionada.");
      this.addAnswer.push("happy");
    }
    else{
      this.presentToast("Carita triste seleccionada.");
      this.addAnswer.push("sad");
    }
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
  }
}

  saveStar(idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    this.addAnswer.push(this.star);
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
  }
}

  saveRange(idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    this.addAnswer.push(this.saturation);
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
  }
  }
  
  saveDimension(idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    this.addAnswer.push(this.dimensiones);
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
  }
}

  saveEscala5(idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    this.addAnswer.push(this.escala5);
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
  }
}

  saveEscala10(idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
    this.addAnswer.push(this.escala10);
    this.addIdPreguntas.push(idPregunta);
    this.presentToast("Respuesta guardada.");
    }
  }

  saveMulti(item, idPregunta){
    if (this.addIdPreguntas.indexOf(idPregunta)>= 0){
      this.presentToast("La pregunta ya ha sido guardada anteriormente");
    }
    else{
      this.addAnswer.push(this.multi);
      this.addIdPreguntas.push(idPregunta);
      this.presentToast("Respuesta guardada.");
    }
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: ''+message ,
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }
}