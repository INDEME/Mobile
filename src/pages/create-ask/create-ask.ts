import 'rxjs/Rx';
import { Component, IonicPage, NavController, NavParams, Http, Response, AlertController,
  AuthSevice } from '../index.paginas';


@IonicPage()
@Component({
  selector: 'page-create-ask',
  templateUrl: 'create-ask.html',
})
export class CreateAskPage {
  item;
  resultado: any;
  resultAsk: any;
  id_encuesta: any;
  id_tipo: any;
  id_pregunta: any;
  IdentificadorUsuario: any;
  pregunta: any;
  noAsks: number;
  asks: any;
  askSlider: any;
  answer: any;
  askSliderCount: number;
  idEncuestas: any [] = [];

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams, public http:Http, public auth: AuthSevice) {
    this.IdentificadorUsuario = this.auth.idUsuario;
    this.item = navParams.data.item;
    this.id_tipo = this.navParams.data.item.id;
    this.asks = []; 
    this.askSlider = [];
  }

  ionViewDidLoad() {
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INpollsGet/' + this.IdentificadorUsuario ).map(res => res.json()).subscribe(data => {
      this.resultado = data.items;
      if(data.items.length >= 1){
        this.id_encuesta = this.resultado[data.items.length-1].id_encuesta;
      }
      else{
        
      }});
  }

  OnSave(){
    this.http.post('https://apex.oracle.com/pls/apex/indeme/INask/', {
      'id_encuesta': this.id_encuesta,
      'id_tipo': this.id_tipo,
      'pregunta': this.pregunta
    }).map((response:Response)=>{
      return response.json();
    }).subscribe(
      ()=> {
    },
      (error)=>{

      }
    )
  }

  addAskOption(){
    this.asks.push(this.answer);
  }

  addAskSlider(){
    this.askSliderCount = this.answer + 1;
  }

  SaveAnswer(){
    this.http.get('https://apex.oracle.com/pls/apex/indeme/INaskGet/' + this.id_encuesta +"/"+this.pregunta ).map(res => res.json()).subscribe(data => {
      this.resultAsk = data.items;
      this.id_pregunta = this.resultAsk[0];
      if(data.items.length >= 1){
        this.id_pregunta = this.resultAsk[data.items.length-1].id_pregunta;
      }

    });
    for(var i=0; i < this.asks.length+1; i++){
      this.http.post('https://apex.oracle.com/pls/apex/indeme/INanswer/', {
        'id_encuesta': this.id_encuesta,
        'id_pregunta': this.id_pregunta,
        'respuesta': this.asks[i]
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
}
