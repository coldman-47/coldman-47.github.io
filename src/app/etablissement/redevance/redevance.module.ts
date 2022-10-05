import { NgModule } from '@angular/core';

import { RedevanceRoutingModule } from './redevance-routing.module';
import { RedevanceComponent } from './redevance.component';
import { NewRedevanceComponent } from './new-redevance/new-redevance.component';
import { ListRedevancesComponent } from './list-redevances/list-redevances.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RedevanceComponent,
    NewRedevanceComponent,
    ListRedevancesComponent
  ],
  imports: [
    SharedModule,
    RedevanceRoutingModule
  ]
})
export class RedevanceModule { }
