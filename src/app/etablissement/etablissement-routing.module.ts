import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classe/classes/classes.component';
import { EnseignantsComponent } from './enseignant/enseignants/enseignants.component';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { PedagogieComponent } from './pedagogie/pedagogie.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';

const routes: Routes = [
  {
    path: 'pedagogie',
    component: PedagogieComponent,
    children: [{ path: 'classes', component: ClassesComponent }],
  },
  { path: 'personnel', component: PersonnelComponent },
  { path: 'enseignants', component: EnseignantsComponent },
  {
    path: 'redevances',
    loadChildren: () =>
      import('./redevance/redevance.module').then((m) => m.RedevanceModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementRoutingModule {}
