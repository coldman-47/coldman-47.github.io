import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../core/pipes/pipes.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { EditEtablissementComponent } from './etablissement/edit-etablissement/edit-etablissement.component';
import { EtablissementsComponent } from './etablissement/etablissements/etablissements.component';
import { NewEtablissementComponent } from './etablissement/new-etablissement/new-etablissement.component';


@NgModule({
  declarations: [
    EtablissementsComponent,
    NewEtablissementComponent,
    EditEtablissementComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    AccordionModule,
    CardModule,
    FileUploadModule,
    MatTabsModule,
    PaginatorModule,
    PipesModule,
    RadioButtonModule,
    TableModule
  ]
})
export class AdministrationModule { }
