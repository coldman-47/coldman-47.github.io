import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Redevance } from 'src/app/core/models/redevance/redevance.model';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { RedevanceService } from 'src/app/core/services/redevance/redevance.service';
import { CycleService } from '../../../core/services/cycle/cycle.service';

@Component({
  selector: 'app-new-redevance',
  templateUrl: './new-redevance.component.html',
  styleUrls: ['./new-redevance.component.sass']
})
export class NewRedevanceComponent implements OnInit {
  redevanceForm: FormGroup = new FormGroup({
    redevance: new FormGroup({
      montant: new FormControl(null, [Validators.required]),
      montantInscription: new FormControl(null, [Validators.required]),
      nbMois: new FormControl(null, [Validators.required]),
      debutMois: new FormControl(null, [Validators.required]),
    }),
    filieres: new FormControl([], [Validators.required]),
    cycle: new FormControl([], [Validators.required]),
    niveaux: new FormControl([], [Validators.required]),
  });

  cycles: any[] = [];
  filieres: any[] = [];
  niveaux: any[] = [];

  redevance?: Redevance;
  isEdit: boolean = false;
  title: string = 'Nouvelle redevance';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filiereService: FiliereService,
    private _redevanceService: RedevanceService,
    private _cycleService: CycleService
  ) { }

  ngOnInit(): void {
    this._cycleService.cycles.subscribe({
      next: (cycles) => this.cycles = cycles
    });
    // this._filiereService.getFilieres().subscribe({
    //   next: (filieres) => this.filieres = filieres
    // });
    this._cycleService.getCycles();
    this._route.params.subscribe((params: Params) => {
      if (params['id']) {
        this._redevanceService.getRedevance(params['id']).subscribe((data: Redevance) => {
          this.redevance = data;
          if (data.niveaux && data.niveaux[0]._id) {
            this._filiereService.getFilieresByNiveau(data.niveaux[0]._id).subscribe(filieres => {
              if (filieres) {
                this.filieres = filieres

                const cycle = data.niveaux?.map(niveau => niveau.cycle)[0];
                this.title = 'Modifier redevance';
                this.isEdit = true;
                this.getNiveaux({ value: cycle });
                this.redevanceForm.patchValue({
                  redevance: {
                    montant: data.redevance?.montant,
                    montantInscription: data.redevance?.montantInscription,
                    nbMois: data.redevance?.nbMois,
                    debutMois: data.redevance?.debutMois,
                  },
                  filieres: data.filieres,
                  cycle,
                  niveaux: data.niveaux?.map(niveau => niveau._id),
                });
              }
            });
          }

        });
      }
    });
  }

  getNiveaux(cycle: any) {
    this.niveaux = this.cycles.find(c => c._id === cycle.value)?.niveaux;
    this.redevanceForm.get('niveaux')?.setValue([]);
    this.redevanceForm.get('filieres')?.setValue([]);
  }

  getFilieres(event: any) {
    if (event.value[0]) {
      this._filiereService.getFilieresByNiveau(event.value[0]).subscribe(data => this.filieres = data);
    } else {
      this.filieres = [];
    }
    this.redevanceForm.get('filieres')?.setValue([])
  }

  onSubmit() {
    if (this.redevanceForm.invalid) { return; }
    const data = {
      ...this.redevance,
      ...this.redevanceForm.value,
    };
    if (this.isEdit) {
      const id = data._id;
      this._redevanceService.updateRedevance(id, data).subscribe({
        next: (data) => this._router.navigate(['/etablissement/redevances']),
      });
    } else {
      this._redevanceService.createRedevance(data).subscribe({
        next: () => this._router.navigate(['/etablissement/redevances']),
      });
    }
  }

}
