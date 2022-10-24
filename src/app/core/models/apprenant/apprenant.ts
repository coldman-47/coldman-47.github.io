import { Classe } from "../classe/classe";
import { User } from "../user/user";

export class Apprenant extends User {
    classe: any | Classe = new Classe;
    dateNaiss: any;
    matricule?: string;
    tuteur?: any;
}
