import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CaisseRoutingModule } from './caisse-routing.module';
import { CaisseComponent } from './caisse.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CaisseListComponent } from './caisse-list/caisse-list.component';
import { DepenseFormComponent } from './depense-form/depense-form.component';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [CaisseComponent, CaisseListComponent, DepenseFormComponent],
  imports: [SharedModule, DialogModule, FileUploadModule, TabViewModule, CaisseRoutingModule],
})
export class CaisseModule {}
