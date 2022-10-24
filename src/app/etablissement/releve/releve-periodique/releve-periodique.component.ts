import { Component, Input, OnInit } from '@angular/core';
import { Apprenant } from '../../../core/models/apprenant/apprenant';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';
import { NiveauService } from 'src/app/core/services/niveaux/niveau.service';
import { FiliereService } from '../../../core/services/filiere/filiere.service';
import { NoteService } from '../../../core/services/note/note.service';
import { EvaluationService } from '../../../core/services/evaluation/evaluation.service';
import { CycleService } from '../../../core/services/cycle/cycle.service';

@Component({
  selector: 'app-releve-periodique',
  templateUrl: './releve-periodique.component.html',
  styleUrls: ['./releve-periodique.component.sass']
})
export class RelevePeriodiqueComponent implements OnInit {

  @Input() apprenant: Apprenant;
  matieres: any[];
  periodes: any[];
  types: any[];
  type: string;
  periode: string;

  constructor(private srv: NoteService, private matiereSrv: MatiereService, private niveauSrv: NiveauService, private filiereSrv: FiliereService, evaluationSrv: EvaluationService, cycleSrv: CycleService) {
    evaluationSrv.getTypes().subscribe({
      next: (_types: any) => this.types = _types
    });
    this.periodes = cycleSrv.cycle.value.periodes;
  }

  ngOnInit(): void {
    console.log(this.apprenant);
  }

  getMatieres() {
    this.matiereSrv.getMatieresByNiveauFiliere(this.niveauSrv.niveau.value, this.filiereSrv.filiere.value).subscribe({
      next: (matieres: any) => {
        matieres.forEach((element: any) => {
          this.srv.getNotesApprenantByMatiere(element._id, this.type, this.periode).subscribe({
            next: res => console.log(res)
          })
        });
      },
    });
  }

  getNotes(){
    if(this.type && this.periode) this.getMatieres();
  }

}
