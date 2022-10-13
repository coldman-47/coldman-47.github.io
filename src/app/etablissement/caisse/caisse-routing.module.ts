import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaisseListComponent } from './caisse-list/caisse-list.component';
import { CaisseComponent } from './caisse.component';
import { DepenseFormComponent } from './depense-form/depense-form.component';

const routes: Routes = [
  {
    path: '',
    component: CaisseComponent,
    children: [
      {
        path: '',
        component: CaisseListComponent
      },
      {
        path: 'nouvelle-depense',
        component: DepenseFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaisseRoutingModule { }
