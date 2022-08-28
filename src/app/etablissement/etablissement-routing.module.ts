import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classe/classes/classes.component';
import { EnseignantsComponent } from './enseignant/enseignants/enseignants.component';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';

const routes: Routes = [
  {
    path: 'filieres',
    component: FilieresComponent,
    children: [{ path: 'classes', component: ClassesComponent }],
  },
  { path: 'personnel', component: PersonnelComponent },
  { path: 'enseignants', component: EnseignantsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementRoutingModule {}
