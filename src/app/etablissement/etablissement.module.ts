import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SkeletonModule } from 'primeng/skeleton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../core/pipes/pipes.module';
import { ApprenantsComponent } from './apprenant/apprenants/apprenants.component';
import { NewApprenantComponent } from './apprenant/new-apprenant/new-apprenant.component';
import { ClassesComponent } from './classe/classes/classes.component';
import { NewClasseComponent } from './classe/new-classe/new-classe.component';
import { EtablissementRoutingModule } from './etablissement-routing.module';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { NewPersonnelComponent } from './personnel/new-personnel/new-personnel.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';

@NgModule({
  declarations: [
    FilieresComponent,
    PersonnelComponent,
    NewPersonnelComponent,
    ClassesComponent,
    NewClasseComponent,
    ApprenantsComponent,
    NewApprenantComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EtablissementRoutingModule,
    CalendarModule,
    CardModule,
    FileUploadModule,
    InputNumberModule,
    InputTextModule,
    MatTabsModule,
    PaginatorModule,
    PanelMenuModule,
    PipesModule,
    SkeletonModule,
    StepsModule,
    TableModule,
  ],
})
export class EtablissementModule {}
