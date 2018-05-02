
export class TeamModel {
    idTeam: string;
    strTeam: string;
    image : string;

    public static fromJson(jsonObject: any): TeamModel {
        const model = new TeamModel();
    
        model.idTeam = jsonObject.idTeam;
        model.strTeam = jsonObject.strTeam;
        model.image = jsonObject.strTeamBadge;
    
        return model;
      }
}