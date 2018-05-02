
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import { PlayerModel } from '../../app/model/player.model';


/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayerProvider {

  apiUrl: string = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=";
  results : PlayerModel[] =[];

  constructor(public http: Http) {
    console.log('Hello PlayerProvider Provider');
  }

  getPlayer(teamName : string){
  
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+teamName)
        .toPromise()
        .then(
          res => {
            this.results = res.json().player ? res.json().player.map(item =>{
              return PlayerModel.fromJson(item);
              }) : res.json().player;
             resolve();
          }
        )
    });
    return promise;
  }

}
