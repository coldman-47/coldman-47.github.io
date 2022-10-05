import { NgModule } from '@angular/core';
import { BoursesRoutingModule } from './bourses-routing.module';
import { BoursesComponent } from './bourses.component';
import { BoursesListComponent } from './bourses-list/bourses-list.component';
import { BoursesFormComponent } from './bourses-form/bourses-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BoursesComponent,
    BoursesListComponent,
    BoursesFormComponent
  ],
  imports: [
    SharedModule,
    BoursesRoutingModule
  ]
})
export class BoursesModule { }
