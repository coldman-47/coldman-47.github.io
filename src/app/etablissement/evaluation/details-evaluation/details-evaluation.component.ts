import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';
import { NoteService } from '../../../core/services/note/note.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details-evaluation',
  templateUrl: './details-evaluation.component.html',
  styleUrls: ['./details-evaluation.component.sass']
})
export class DetailsEvaluationComponent implements OnInit {

  apprenants: Apprenant[] | any[] = [];
  absents: Apprenant[] = [];
  @Input() evaluation: any;
  data: any;
  @ViewChild('chart') chart: any;

  constructor(apprenantSrv: ApprenantService, private noteSrv: NoteService, private msgSrv: MessageService) {
    this.apprenants = apprenantSrv.apprenants.value;
    apprenantSrv.apprenants.subscribe({
      next: (_apprenants) => {
        this.apprenants = _apprenants;
        if(this.evaluation) this.getNotes();
      }
    })
  }

  ngOnInit(): void {
    this.absents = this.apprenants.filter(_apprenant => this.evaluation.absents.includes(_apprenant._id));
    this.getNotes();    
  }

  getNotes(){
    this.data = {labels: [], datasets: [{data: [], backgroundColor: '#2e71b0'}]};
    this.apprenants.forEach(
      (_apprenant: Apprenant, idx: number) => this.noteSrv.getNoteApprenantByEvaluation(this.evaluation._id, <string>_apprenant._id).subscribe({
        next: (note: any) => {
          this.apprenants[idx].note = note ? note : {};
          this.data.labels.push(_apprenant.prenom+' '+_apprenant.nom);
          this.data.datasets[0].data.push(note ? note.note: 0);
          this.chart.reinit();
        }
      })
    );
  }

  addNote(e: any, apprenantId: string, noteObj: any){
    console.log(noteObj);
    if(!noteObj.note && noteObj.note !== 0) this.noteSrv.addNote({note: e.target.value, evaluation: this.evaluation._id, apprenant: apprenantId}).subscribe({
      next: (_note) => {
        this.msgSrv.add({severity: "success", summary: "La note de l'apprenant a été ajoutée"});
        const idx = this.apprenants.findIndex(_apprenant => _apprenant._id === apprenantId)
        if(idx !== -1) this.apprenants[idx].note = _note;
      }
    });
    else {
      noteObj.note = e.target.value;
      this.noteSrv.editNote(noteObj).subscribe({
        next: (_note) => {
          this.msgSrv.add({severity: "success", summary: "La note de l'apprenant a été modifiée"});
          const idx = this.apprenants.findIndex(_apprenant => _apprenant._id === apprenantId)
          if(idx !== -1) this.apprenants[idx].note = _note;
        }
      });
    }
  }

}
