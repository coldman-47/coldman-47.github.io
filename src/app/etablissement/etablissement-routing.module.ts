import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';

const routes: Routes = [
  { path: 'filieres', component: FilieresComponent },
  { path: 'personnel', component: PersonnelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementRoutingModule {}
