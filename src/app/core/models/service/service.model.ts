import { Apprenant } from "../apprenant/apprenant";
import { Etablissement } from "../etablissement/etablissement";

export class ServiceExtraModel {

  _id: string;
  label: string;
  tarif: string;
  nbMois: number;
  debutMois: number;
  etablissement: Etablissement;
  apprenants: Apprenant[];
}
