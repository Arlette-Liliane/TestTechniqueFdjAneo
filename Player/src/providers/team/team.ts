import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { TeamModel } from '../../app/model/team.model';
import { LeagueModel } from '../../app/model/league.model';
import {Observable} from 'rxjs';


/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamProvider {
  apiUrlTeams: string = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=";
  apiUrlLeague : string = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";


  constructor(public http:Http) {
    console.log('Hello TeamProvider Provider');
  }

  getLeague(): Observable<LeagueModel[]> {

    return this.http.get(this.apiUrlLeague).map(res =>{
      return res.json().leagues ? res.json().leagues.map(item =>{
        return LeagueModel.fromJson(item);
        }) : res.json().leagues
    });
  }


  getTeam(nameLeague : string) : Observable<TeamModel[]>{

    return this.http.get(this.apiUrlTeams+nameLeague).map(res =>{
      return res.json().teams ? res.json().teams.map(item =>{
        return TeamModel.fromJson(item);
        }) : res.json().teams
    });
  }



}
