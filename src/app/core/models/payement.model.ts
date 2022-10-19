export class PayementModel {
  _id?: string;
  montant: number;
  mois?: number;
  date?: Date;
  preuves?: any[];
  apprenant?: any;
  encaissement?: any;
}
