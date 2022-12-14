import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxPrintElementModule } from 'ngx-print-element';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ChipModule } from 'primeng/chip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TreeSelectModule } from 'primeng/treeselect';
import { DataUriToBlobPipe } from '../core/pipes/file/data-uri-to-blob.pipe';
import { PipesModule } from '../core/pipes/pipes.module';
import { AppDetailPayementsComponent } from './apprenant/apprenant-detail/app-detail-payements/app-detail-payements.component';
import { AppDetailServicesComponent } from './apprenant/apprenant-detail/app-detail-services/app-detail-services.component';
import { ApprenantDetailComponent } from './apprenant/apprenant-detail/apprenant-detail.component';
import { ApprenantsComponent } from './apprenant/apprenants/apprenants.component';
import { EditApprenantComponent } from './apprenant/edit-apprenant/edit-apprenant.component';
import { NewApprenantComponent } from './apprenant/new-apprenant/new-apprenant.component';
import { ClassesComponent } from './classe/classes/classes.component';
import { NewClasseComponent } from './classe/new-classe/new-classe.component';
import { ConvocationsComponent } from './convocations/convocations/convocations.component';
import { NewConvocationComponent } from './convocations/new-convocation/new-convocation.component';
import { CoursComponent } from './cours/cours/cours.component';
import { DetailsCoursComponent } from './cours/details-cours/details-cours.component';
import { EditCoursComponent } from './cours/edit-cours/edit-cours.component';
import { NewCoursComponent } from './cours/new-cours/new-cours.component';
import { DetailsEnseignantComponent } from './enseignant/details-enseignant/details-enseignant.component';
import { EditEnseignantComponent } from './enseignant/edit-enseignant/edit-enseignant.component';
import { EnseignantsComponent } from './enseignant/enseignants/enseignants.component';
import { NewEnseignantComponent } from './enseignant/new-enseignant/new-enseignant.component';
import { EtablissementRoutingModule } from './etablissement-routing.module';
import { DetailsEvaluationComponent } from './evaluation/details-evaluation/details-evaluation.component';
import { EvaluationFormComponent } from './evaluation/evaluation-form/evaluation-form.component';
import { FilieresComponent } from './filiere/filieres/filieres.component';
import { NewFiliereComponent } from './filiere/new-filiere/new-filiere.component';
import { InfosComponent } from './info/infos/infos.component';
import { NotesComponent } from './note/notes/notes.component';
import { PedagogieComponent } from './pedagogie/pedagogie.component';
import { PermissionsComponent } from './permission/permissions/permissions.component';
import { EditPersonnelComponent } from './personnel/edit-personnel/edit-personnel.component';
import { NewPersonnelComponent } from './personnel/new-personnel/new-personnel.component';
import { PersonnelComponent } from './personnel/personnel/personnel.component';
import { RelevePeriodiqueComponent } from './releve/releve-periodique/releve-periodique.component';
import { RolesComponent } from './role/roles/roles.component';
import { SeanceFormComponent } from './seance/seance-form/seance-form.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NewUeComponent } from './ue/new-ue/new-ue.component';
import { UesComponent } from './ue/ues/ues.component';

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
    EditEnseignantComponent,
    NewFiliereComponent,
    NewUeComponent,
    EditApprenantComponent,
    DataUriToBlobPipe,
    UesComponent,
    TimetableComponent,
    SeanceFormComponent,
    EvaluationFormComponent,
    DetailsEvaluationComponent,
    RelevePeriodiqueComponent,
    ApprenantDetailComponent,
    AppDetailServicesComponent,
    AppDetailPayementsComponent,
    DetailsCoursComponent,
    InfosComponent,
    RolesComponent,
    PermissionsComponent,
    NewConvocationComponent,
    ConvocationsComponent,
    DetailsEnseignantComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EtablissementRoutingModule,
    AccordionModule,
    AvatarModule,
    CalendarModule,
    CardModule,
    NgxPrintElementModule,
    ChartModule,
    ChipModule,
    DividerModule,
    ConfirmPopupModule,
    DialogModule,
    FileUploadModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KnobModule,
    MatTabsModule,
    MultiSelectModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelMenuModule,
    PipesModule,
    RadioButtonModule,
    SkeletonModule,
    SpeedDialModule,
    StepsModule,
    TabViewModule,
    TableModule,
    ToastModule,
    TooltipModule,
    TreeSelectModule
  ],
  providers: [ConfirmationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EtablissementModule {}
