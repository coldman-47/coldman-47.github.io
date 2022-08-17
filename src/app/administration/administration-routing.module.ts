import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementsComponent } from './etablissement/etablissements/etablissements.component';

const routes: Routes = [
  { path: 'etablissements', component: EtablissementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
