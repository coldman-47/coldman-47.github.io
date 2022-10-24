import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRedevancesComponent } from './list-redevances/list-redevances.component';
import { NewRedevanceComponent } from './new-redevance/new-redevance.component';
import { RedevanceComponent } from './redevance.component';

const routes: Routes = [
  {
    path: '',
    component: RedevanceComponent,
    children: [
      {
        path: '',
        component: ListRedevancesComponent
      },
      {
        path: 'nouvelle',
        component: NewRedevanceComponent
      },
      {
        path: ':id/modifier',
        component: NewRedevanceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedevanceRoutingModule { }
