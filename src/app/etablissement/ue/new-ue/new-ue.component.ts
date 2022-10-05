import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Classe } from 'src/app/core/models/classe/classe';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { Ue } from 'src/app/core/models/ue/ue';
import { ClasseService } from 'src/app/core/services/classe/classe.service';
import { UeService } from '../../../core/services/ue/ue.service';
import { Cancel } from '../../../shared/utilities/cancel/cancel';
import { NiveauService } from '../../../core/services/niveaux/niveau.service';

@Component({
  selector: 'app-new-ue',
  templateUrl: './new-ue.component.html',
  styleUrls: ['./new-ue.component.sass'],
})
export class NewUeComponent extends Cancel implements OnInit {
  submitted = false;
  ue = new Ue();
  @Input() filieres!: Filiere[];
  classes?: Classe[];
  @ViewChild('filiereField') filiereField: any;

  constructor(private srv: UeService, private messageSrv: MessageService, confirmSrv: ConfirmationService, private classSrv: ClasseService, private nivaeauSrv: NiveauService) {
    super(confirmSrv);
  }

  ngOnInit(): void {
  }

  create() {
    this.submitted = true;
    this.ue.niveau = this.nivaeauSrv.niveau.value;
    this.srv.addUe(this.ue).subscribe({
      next: (res) => {
        this.ue = new Ue();
        this.filiereField.clear();
        this.messageSrv.add({
          summary: 'La filière a été créée',
          severity: 'success'
        });
        this.submitted = false;
        this.status.emit(false);
      }
    });
  }

  getClasses(e: any){
    this.classSrv.getClassesByFiliere(e.value).subscribe({
      next: (_classes: any) => this.classes = _classes
    })
  }
}
