import { Etablissement } from '../etablissement/etablissement';

export class User {
  _id?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  adresse?: string;
  etablissement?: string | Etablissement;
  sexe?: string;
  photo?: any;
}
