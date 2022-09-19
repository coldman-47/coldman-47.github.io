import { Etablissement } from "../etablissement/etablissement";

export class Filiere {
    _id?: string;
    label?: string;
    etablissement?: string | Etablissement;
}
