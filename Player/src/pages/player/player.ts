import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayerProvider } from '../../providers/player/player.providers';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  teamName: string;
  pageNum = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams, private players: PlayerProvider) {
    (navParams.get('team') !== undefined) ? this.teamName = navParams.get('team') : this.teamName = '';
    this.getListTeam(this.teamName);
    
  }

  //recuperer la liste des joueurs correspondant au nom de l'équipe
  getListTeam(value : string){
   this.players.getPlayer(value);
  }

}
