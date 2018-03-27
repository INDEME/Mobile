import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/*
  Generated class for the ConsultaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultaProvider {

  constructor(public http: Http) {
    //console.log('Hello ConsultaProvider Provider');
  }

  public getListPreguntas() {
    return new Promise((resolve, reject) => {
      this.http.get('https://apex.oracle.com/pls/apex/indeme/INlibrary/').map(res => res.json())
        .subscribe(data => {
          resolve(data.items);
        });
    });
  }
}
