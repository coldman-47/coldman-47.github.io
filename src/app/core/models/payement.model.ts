export class PayementModel {
  _id?: string;
  montant: number;
  mois?: number;
  date?: Date;
  created?: Date;
  updated?: Date;
  moisAregler: number;
  preuves?: any;
  apprenant?: any;
  encaissement?: any;
}
