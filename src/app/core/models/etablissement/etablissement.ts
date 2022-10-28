import { Personnel } from "../personnel/personnel";

export class Etablissement {
    _id?: string;
    nom?: string;
    email?: string;
    telephone?: string;
    directeur?: Personnel;
    personnels?: Personnel[];
    logo: any;
}
