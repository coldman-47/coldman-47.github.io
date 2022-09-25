import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { Ue } from 'src/app/core/models/ue/ue';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';
import { EvaluationService } from '../../../core/services/evaluation/evaluation.service';

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
    matiere: [null, Validators.required],
    type: [null, Validators.required]
  });
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  submitted = false;
  matieres = [];
  enseignants: Enseignant[] = [];
  programme: any[] = [];

  constructor(private srv: EvaluationService, private matiereSrv: MatiereService, private fb: FormBuilder) {
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
    const evaluation: any = this.evaluationForm.value;
    evaluation.classe = this.classeId;
    evaluation.programmation = this.programme;
    this.srv.addEvaluation(evaluation).subscribe({
      next: (_evaluation: any) => console.log(_evaluation)
    });
  }

}
