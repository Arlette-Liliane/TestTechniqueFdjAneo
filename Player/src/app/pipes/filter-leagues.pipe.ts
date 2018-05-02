import { Pipe, PipeTransform } from '@angular/core';
import { isFunction } from 'rxjs/util/isFunction';
import {LeagueModel} from "../model/league.model";

@Pipe({
  name: 'filterLeaguesPipe'
})
export class FilterLeaguesPipe implements PipeTransform {
  transform(leagues: LeagueModel[], filterString: string): LeagueModel[] {
    if (leagues && Array.isArray(leagues)) {
      //filtre les informations de la league en fonction de la valeur saisie par l'utilisateur
      let filters = {strLeague: [filterString]};
      return this.filterLeague(leagues, filters)
    }

    return leagues;
  }

  private filterLeague(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
      return filterKeys.every(key => !!~item[key].indexOf(filters[key]))
    })
  }
}
