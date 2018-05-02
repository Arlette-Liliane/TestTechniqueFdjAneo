export class PlayerModel {
    idTeam: string;
    nom: string;
    strPosition: String;
    dateBorn: Date;
    strSigning: string;
    image: string

    public static fromJson(jsonObject: any): PlayerModel {
        const model = new PlayerModel();
    
        model.idTeam = jsonObject.idTeam;
        model.nom = jsonObject.strPlayer;
        model.strPosition = jsonObject.strPosition;
        model.dateBorn = jsonObject.dateBorn;
        model.strSigning = jsonObject.strSigning;
        model.image = jsonObject.strCutout;
    
        return model;
      }
}