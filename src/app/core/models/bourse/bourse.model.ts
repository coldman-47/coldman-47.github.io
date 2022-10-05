import { Apprenant } from "../apprenant/apprenant";
import { Etablissement } from "../etablissement/etablissement";

export class BourseModel {

  _id: string;
  pourcecentage: number;
  annee: number
  etablissement: Etablissement;
  apprenants: Apprenant[];
}
