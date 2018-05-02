import {Component, OnDestroy} from '@angular/core';
import {NavController, LoadingController, Loading} from 'ionic-angular';
import { TeamProvider } from '../../providers/team/team.providers';
import { TeamModel } from '../../app/model/team.model';
import { PlayerPage } from '../player/player';
import {LeagueModel} from "../../app/model/league.model";
import {FilterLeaguesPipe} from "../../app/pipes/filter-leagues.pipe";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnDestroy {
  teams : TeamModel[] = [] ;
  myInput: string;
  leagues: LeagueModel[];

  private leaguesSub: Subscription;

  constructor(public navCtrl: NavController, public soccer: TeamProvider, public loadingCtrl: LoadingController, public filterLeaguesPipe: FilterLeaguesPipe) {
    this.leaguesSub = soccer.getLeague().subscribe((elements: LeagueModel[]) => {
      this.leagues = elements;
    });
  }

  ngOnDestroy() {
    if (this.leaguesSub) {
      this.leaguesSub.unsubscribe();
    }
  }

  async searchLigue() {
    this.teams = [];

    //debute la recherche quand le nombre de caractère est sup ou égale à 3
    if (this.myInput && this.myInput.length >= 3){
      //chargement du loading
      const loading = this.presentLoadingText();

      //recupère la liste des championnats correspondante à la valeur saisie
      let Arrayleagues = this.filterLeaguesPipe.transform(this.leagues, this.myInput);

      for(let league of Arrayleagues) {
        this.teams = this.teams.concat(await new Promise<TeamModel[]>(resolve => {
          const sub = this.soccer.getTeam(league.strLeague).subscribe(res => {
            if (sub) {
              sub.unsubscribe();
            }
            resolve(res);
          });
        }));
      }
      loading.dismiss();
    }
  }

  //ouvre la page Player
  openPlayer(item : string){
    this.navCtrl.push(PlayerPage, { 'team': item});
  }

  presentLoadingText(): Loading {
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });

    loading.present();

    return loading;
  }
}