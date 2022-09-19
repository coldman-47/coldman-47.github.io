import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/core/models/cours/cours';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { Ue } from 'src/app/core/models/ue/ue';
import { CoursService } from 'src/app/core/services/cours/cours.service';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';

@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.sass'],
})
export class EditCoursComponent implements OnInit {
  @Input() cours!: Cours;
  submitted = false;
  ue?: Ue;
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  matieres: any[] = [];
  enseignants: Enseignant[] = [];

  constructor(
    private srv: CoursService,
    private matiereSrv: MatiereService,
    enseignantSrv: EnseignantService
  ) {
    enseignantSrv.getEnseignants().subscribe({
      next: (_enseignants) => (this.enseignants = _enseignants.data),
    });
  }

  ngOnInit(): void {
    let obj: any = {};
    obj.value = this.cours.matiere.ue._id;
    this.ue = this.cours.matiere.ue;
    this.getMatieres(obj);
    
    
  }

  getMatieres(e: any) {
    this.matiereSrv.getMatieres(e.value).subscribe({
      next: (_matieres: any) => {
        this.matieres = _matieres;
        this.cours.matiere = _matieres.find((matiere: any) => this.cours.matiere._id === matiere._id);
      }
    });
  }
}
