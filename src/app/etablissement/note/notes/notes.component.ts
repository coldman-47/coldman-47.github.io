import { Component, Input, OnInit } from '@angular/core';
import { CycleService } from 'src/app/core/services/cycle/cycle.service';
import { NoteService } from '../../../core/services/note/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {

  @Input() apprenantId: string;
  periodes: any[] = [];
  notes: any[] = [];

  constructor(private srv: NoteService, cycleSrv: CycleService) {
    this.periodes = cycleSrv.cycle.value.periodes;
  }

  ngOnInit(): void {
  }

  getNotes(periodeId: string){
    console.log(periodeId);
    
    this.srv.notesApprenant(this.apprenantId, periodeId).subscribe({
      next: (res: any) => this.notes = res
    });
  }

}
