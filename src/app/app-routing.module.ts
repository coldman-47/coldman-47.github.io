import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
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
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
