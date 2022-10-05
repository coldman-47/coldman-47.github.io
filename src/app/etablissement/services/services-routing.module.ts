import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesFormComponent } from './services-form/services-form.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: ServicesListComponent
      },
      {
        path: 'nouveau',
        component: ServicesFormComponent
      },
      {
        path: ':id/modifier',
        component: ServicesFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
