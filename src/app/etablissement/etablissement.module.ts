import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
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
import { CoursComponent } from './cours/cours/cours.component';
import { NewCoursComponent } from './cours/new-cours/new-cours.component';
import { EnseignantsComponent } from './enseignant/enseignants/enseignants.component';
import { NewEnseignantComponent } from './enseignant/new-enseignant/new-enseignant.component';
import { EtablissementRoutingModule } from './etablissement-routing.module';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { NewPersonnelComponent } from './personnel/new-personnel/new-personnel.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';
import { EditCoursComponent } from './cours/edit-cours/edit-cours.component';
;

// FullCalendarModule.registerPlugins([
//   // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin
// ]);

@NgModule({
  declarations: [
    FilieresComponent,
    PersonnelComponent,
    NewPersonnelComponent,
    ClassesComponent,
    NewClasseComponent,
    ApprenantsComponent,
    NewApprenantComponent,
    EnseignantsComponent,
    NewEnseignantComponent,
    CoursComponent,
    NewCoursComponent,
    EditCoursComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EtablissementRoutingModule,
    AccordionModule,
    CalendarModule,
    CardModule,
    DialogModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EtablissementModule {}
