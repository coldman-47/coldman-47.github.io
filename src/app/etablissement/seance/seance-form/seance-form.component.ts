import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';
import { Ue } from 'src/app/core/models/ue/ue';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';
import { SeanceService } from '../../../core/services/seance/seance.service';

@Component({
  selector: 'app-seance-form',
  templateUrl: './seance-form.component.html',
  styleUrls: ['./seance-form.component.sass']
})
export class SeanceFormComponent implements OnInit {

  seanceForm!: FormGroup;
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  submitted = false;
  matieres = [];
  enseignants: Enseignant[] = [];
  days = [
    {label: "Lundi", jour: 1}, 
    {label: "Mardi", jour: 2}, 
    {label: "Mercredi", jour: 3}, 
    {label: "Jeudi", jour: 4}, 
    {label: "Vendredi", jour: 5}, 
    {label: "Samedi", jour: 6}
  ]
  programme: any[] = [];

  constructor(private srv: SeanceService ,private matiereSrv: MatiereService, private fb: FormBuilder, enseignantSrv: EnseignantService) {
    enseignantSrv.getEnseignants().subscribe({
      next: (_enseignants) => this.enseignants = _enseignants.data.map(
        (_enseignant: any) => {
          _enseignant.fullName = _enseignant.prenom+' '+_enseignant.nom;
          return _enseignant;
        }
      ),
    });
  }

  ngOnInit(): void {
    this.seanceForm = this.fb.group({
      label: [null, Validators.required],
      debut: [null, Validators.required],
      fin: [null, Validators.required],
      volumeHoraire: [null, Validators.required],
      matiere: [null, Validators.required],
      enseignant: [null, Validators.required]
    });
  }
  
    get controls(){
      return this.seanceForm.controls;
    }
  
    getMatieres(e: any) {
      this.matiereSrv.getMatieres(e.value).subscribe({
        next: (_matieres: any) => (this.matieres = _matieres),
      });
    }
  
    getDays(jour: number, e: any){
      const id = this.programme.findIndex((_day: any) => _day.jour === jour);
      if(e.value){
        if(id !== -1) this.programme[id].duree = e.value;
        else this.programme.push({jour: jour, duree: e.value});
      }else this.programme.splice(id, 1);
    }

  create(){
    const seance = this.seanceForm.value;
    seance.classe = this.classeId;
    seance.programmation = this.programme;
    this.srv.addSeance(seance).subscribe({
      next: (_seance: any) => console.log(_seance)
    });
  }

}
