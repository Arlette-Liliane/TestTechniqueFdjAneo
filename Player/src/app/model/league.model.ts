
export class LeagueModel {
    idLeague: string;
    strLeague: string;

    public static fromJson(jsonObject: any): LeagueModel {
        const model = new LeagueModel();
    
        model.idLeague = jsonObject.idLeague;
        model.strLeague = jsonObject.strLeague;
    
        return model;
      }
}