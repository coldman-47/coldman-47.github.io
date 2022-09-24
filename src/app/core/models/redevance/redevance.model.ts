import { Filiere } from "../filiere/filiere";

export class Redevance {
  _id?: string;
  redevance: {
    _id?: string,
    montant: number,
    montantInscription: number,
    nbMois: number,
    debutMois?: number
  };
  filieres: Filiere[];
  niveaux: {
    _id?: string,
    cycle?: string,
    label: string,
  }[];
}
