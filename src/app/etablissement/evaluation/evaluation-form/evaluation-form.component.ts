import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { Ue } from 'src/app/core/models/ue/ue';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';
import { EvaluationService } from '../../../core/services/evaluation/evaluation.service';
import { CycleService } from '../../../core/services/cycle/cycle.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.sass']
})
export class EvaluationFormComponent implements OnInit {
  
  evaluationForm = this.fb.group({
    titre: [null, Validators.required],
    date: [null, Validators.required],
    detail: [null],
    duree: [null, Validators.required],
    periode: [null, Validators.required],
    matiere: [null, Validators.required],
    type: [null, Validators.required]
  });
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  submitted = false;
  matieres = [];
  enseignants: Enseignant[] = [];
  programme: any[] = [];
  types: any[] = [];
  periodes: any[] = [];

  constructor(private srv: EvaluationService, private matiereSrv: MatiereService, cycleSrv: CycleService, private fb: FormBuilder) {
    srv.getTypes().subscribe({
      next: (_types: any) => this.types = _types
    });
    this.periodes = cycleSrv.cycle.value.periodes;
    console.log(cycleSrv.cycle.value);
    
  }

  ngOnInit(): void {
    console.log(this.controls);
    
  }
  
  get controls(){
    return this.evaluationForm.controls;
  }

  getMatieres(e: any) {
    this.matiereSrv.getMatieres(e.value).subscribe({
      next: (_matieres: any) => (this.matieres = _matieres),
    });
  }

  create(){
    if(this.evaluationForm.valid){
      const evaluation: any = this.evaluationForm.value;
      evaluation.classe = this.classeId;
      evaluation.programmation = this.programme;
      this.srv.addEvaluation(evaluation).subscribe({
        next: (_evaluation: any) => {
          this.evaluationForm.reset();
        },
      });
    }
  }

}
