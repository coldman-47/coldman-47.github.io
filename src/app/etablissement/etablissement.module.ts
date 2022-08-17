import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../core/pipes/pipes.module';
import { EtablissementRoutingModule } from './etablissement-routing.module';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { NewPersonnelComponent } from './personnel/new-personnel/new-personnel.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';

@NgModule({
  declarations: [FilieresComponent, PersonnelComponent, NewPersonnelComponent],
  imports: [
    CommonModule,
    EtablissementRoutingModule,
    CardModule,
    FileUploadModule,
    MatTabsModule,
    PaginatorModule,
    PanelMenuModule,
    PipesModule,
    SkeletonModule,
    TableModule,
  ],
})
export class EtablissementModule {}
