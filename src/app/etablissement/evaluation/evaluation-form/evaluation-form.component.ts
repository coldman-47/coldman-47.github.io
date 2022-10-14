import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { Ue } from 'src/app/core/models/ue/ue';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';
import { EvaluationService } from '../../../core/services/evaluation/evaluation.service';
import { CycleService } from '../../../core/services/cycle/cycle.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { NiveauService } from 'src/app/core/services/niveaux/niveau.service';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.sass'],
})
export class EvaluationFormComponent implements OnInit {
  evaluationForm = this.fb.group({
    titre: [null, Validators.required],
    date: [null, Validators.required],
    detail: [null],
    duree: [null, Validators.required],
    periode: [null, Validators.required],
    matiere: [null, Validators.required],
    enseignant: [null, Validators.required],
    type: [null, Validators.required],
  });
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  submitted = false;
  matieres = [];
  enseignants: Enseignant[] = [];
  programme: any[] = [];
  types: any[] = [];
  periodes: any[] = [];
  @Input() evaluation?: any;

  constructor(
    private srv: EvaluationService,
    private matiereSrv: MatiereService,
    cycleSrv: CycleService,
    private fb: FormBuilder,
    private filiereSrv: FiliereService,
    private niveauSrv: NiveauService,
    enseignantSrv: EnseignantService
  ) {
    srv.getTypes().subscribe({
      next: (_types: any) => this.types = _types
    });
    this.periodes = cycleSrv.cycle.value.periodes;
    enseignantSrv.getEnseignants().subscribe({
      next: (_enseignants) =>
        (this.enseignants = _enseignants.data.map((_enseignant: any) => {
          _enseignant.fullName = _enseignant.prenom + ' ' + _enseignant.nom;
          return _enseignant;
        })),
    });
  }

  ngOnInit(): void {
    this.evaluationForm.patchValue(this.evaluation);
    this.matiereSrv
    .getMatieresByNiveauFiliere(
      this.niveauSrv.niveau.value,
      this.filiereSrv.filiere.value
    )
    .subscribe({
      next: (res: any) =>
        (this.matieres = res),
    });
  }

  get controls() {
    return this.evaluationForm.controls;
  }

  getMatieres(e: any) {
    this.matiereSrv.getMatieres(e.value).subscribe({
      next: (_matieres: any) => (this.matieres = _matieres),
    });
  }

  create() {
    if (this.evaluationForm.valid) {
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
