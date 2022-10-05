import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoursesFormComponent } from './bourses-form/bourses-form.component';
import { BoursesListComponent } from './bourses-list/bourses-list.component';
import { BoursesComponent } from './bourses.component';

const routes: Routes = [
  {
    path: '',
    component: BoursesComponent,
    children: [
      {
        path: '',
        component: BoursesListComponent
      },
      {
        path: 'nouveau',
        component: BoursesFormComponent
      },
      {
        path: ':id/modifier',
        component: BoursesFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoursesRoutingModule { }
