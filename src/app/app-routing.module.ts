import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'administration',
        loadChildren: () =>
          import('./administration/administration.module').then(
            (module) => module.AdministrationModule
          ),
      },
      {
        path: 'etablissement',
        loadChildren: () =>
          import('./etablissement/etablissement.module').then(
            (module) => module.EtablissementModule
          ),
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
