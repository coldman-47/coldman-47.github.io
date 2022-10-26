import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classe/classes/classes.component';
import { EnseignantsComponent } from './enseignant/enseignants/enseignants.component';
import { InfosComponent } from './info/infos/infos.component';
import { PedagogieComponent } from './pedagogie/pedagogie.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';
import { RolesComponent } from './role/roles/roles.component';

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
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'bourses',
    loadChildren: () =>
      import('./bourses/bourses.module').then((m) => m.BoursesModule),
  },
  {
    path: 'caisses',
    loadChildren: () =>
      import('./caisse/caisse.module').then((m) => m.CaisseModule),
  },{
    path: 'infos',
    component: InfosComponent
  },{
    path: 'roles',
    component: RolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementRoutingModule {}
