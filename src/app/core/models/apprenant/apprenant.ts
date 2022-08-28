import { Classe } from "../classe/classe";
import { User } from "../user/user";

export class Apprenant extends User {
    classe: string | Classe = new Classe;
    dateNaiss: any;
    matricule?: string;
}
