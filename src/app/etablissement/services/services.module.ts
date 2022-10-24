import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesFormComponent } from './services-form/services-form.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServicesListComponent,
    ServicesFormComponent
  ],
  imports: [
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
