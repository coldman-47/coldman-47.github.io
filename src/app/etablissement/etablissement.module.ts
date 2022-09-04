import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { PipesModule } from '../core/pipes/pipes.module';
import { ApprenantsComponent } from './apprenant/apprenants/apprenants.component';
import { NewApprenantComponent } from './apprenant/new-apprenant/new-apprenant.component';
import { ClassesComponent } from './classe/classes/classes.component';
import { NewClasseComponent } from './classe/new-classe/new-classe.component';
import { CoursComponent } from './cours/cours/cours.component';
import { EditCoursComponent } from './cours/edit-cours/edit-cours.component';
import { NewCoursComponent } from './cours/new-cours/new-cours.component';
import { EditEnseignantComponent } from './enseignant/edit-enseignant/edit-enseignant.component';
import { EnseignantsComponent } from './enseignant/enseignants/enseignants.component';
import { NewEnseignantComponent } from './enseignant/new-enseignant/new-enseignant.component';
import { EtablissementRoutingModule } from './etablissement-routing.module';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { PedagogieComponent } from './pedagogie/pedagogie.component';
import { EditPersonnelComponent } from './personnel/edit-personnel/edit-personnel.component';
import { NewPersonnelComponent } from './personnel/new-personnel/new-personnel.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';

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
    EditPersonnelComponent,
    ClassesComponent,
    NewClasseComponent,
    ApprenantsComponent,
    NewApprenantComponent,
    EnseignantsComponent,
    NewEnseignantComponent,
    CoursComponent,
    NewCoursComponent,
    EditCoursComponent,
    PedagogieComponent,
    EditEnseignantComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EtablissementRoutingModule,
    AccordionModule,
    CalendarModule,
    CardModule,
    ConfirmPopupModule,
    DialogModule,
    FileUploadModule,
    InputNumberModule,
    InputTextModule,
    MatTabsModule,
    PaginatorModule,
    PanelMenuModule,
    PipesModule,
    SkeletonModule,
    SpeedDialModule,
    StepsModule,
    TableModule,
  ],
  providers: [ConfirmationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EtablissementModule {}
