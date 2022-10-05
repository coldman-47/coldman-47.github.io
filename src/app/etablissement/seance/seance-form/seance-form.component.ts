import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';
import { Ue } from 'src/app/core/models/ue/ue';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';
import { SeanceService } from '../../../core/services/seance/seance.service';
import { DatePipe } from '@angular/common';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { NiveauService } from '../../../core/services/niveaux/niveau.service';

@Component({
  selector: 'app-seance-form',
  templateUrl: './seance-form.component.html',
  styleUrls: ['./seance-form.component.sass'],
})
export class SeanceFormComponent implements OnInit {
  seanceForm = this.fb.group({
    label: [null, Validators.required],
    debut: [null, Validators.required],
    fin: [null, Validators.required],
    volumeHoraire: [null, Validators.required],
    matiere: [null, Validators.required],
    enseignant: [null, Validators.required],
  });
  @ViewChildren('duree') durees: any;
  @ViewChildren('heure') heures: any;
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  submitted = false;
  matieres = [];
  enseignants: Enseignant[] = [];
  days = [
    { label: 'Lundi', jour: 1 },
    { label: 'Mardi', jour: 2 },
    { label: 'Mercredi', jour: 3 },
    { label: 'Jeudi', jour: 4 },
    { label: 'Vendredi', jour: 5 },
    { label: 'Samedi', jour: 6 },
  ];
  programme: any[] = [];
  @Input() seance?: any;

  constructor(
    private srv: SeanceService,
    private matiereSrv: MatiereService,
    private fb: FormBuilder,
    enseignantSrv: EnseignantService,
    private filiereSrv: FiliereService,
    private niveauSrv: NiveauService
  ) {
    enseignantSrv.getEnseignants().subscribe({
      next: (_enseignants) =>
        (this.enseignants = _enseignants.data.map((_enseignant: any) => {
          _enseignant.fullName = _enseignant.prenom + ' ' + _enseignant.nom;
          return _enseignant;
        })),
    });
  }

  ngOnInit(): void {
    this.matiereSrv
      .getMatieresByNiveauFiliere(
        this.niveauSrv.niveau.value,
        this.filiereSrv.filiere.value
      )
      .subscribe({
        next: (res: any) =>
          (this.matieres = res.map((_val: any) => _val.matiere)),
      });
    this.srv.getSeance(this.seance.seance).subscribe({
      next: (res: any) => {
        res.debut = new Date(res.debut);
        res.fin = new Date(res.fin);
        this.seanceForm.patchValue(res);
        this.programme = res.programmations;
        this.programme.forEach(p => {
          this.durees._results[p.jour].input.nativeElement.value = p.duree;
          this.heures._results[p.jour].inputfieldViewChild.nativeElement.value = p.debut;
        });
      }
    });    
  }

  get controls() {
    return this.seanceForm.controls;
  }

  getMatieres(e: any) {
    this.matiereSrv.getMatieres(e.value).subscribe({
      next: (res: any) => (this.matieres = res.matieres),
    });
  }

  getDays(jour: number, e: any, start: any) {
    const id = this.programme.findIndex((_day: any) => _day.jour === jour);
    if (e.value) {
      if (id !== -1) this.programme[id].duree = e.value;
      else this.programme.push({ jour: jour, duree: e.value });
    } else {
      this.programme.splice(id, 1);
      start.clear();
    }
  }

  setStart(jour: number, start: any) {
    const id = this.programme.findIndex((_day: any) => _day.jour === jour);
    const pipe = new DatePipe('fr-FR');
    if (start) this.programme[id].debut = pipe.transform(start, 'hh:mm');
  }

  create() {
    const seance: any = this.seanceForm.value;
    seance.classe = this.classeId;
    seance.programmations = this.programme;
    this.srv.addSeance(seance).subscribe({
      next: (_seance: any) => console.log(_seance),
    });
  }

  update(){}
}
