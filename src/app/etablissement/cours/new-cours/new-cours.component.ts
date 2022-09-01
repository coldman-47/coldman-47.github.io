import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/core/models/cours/cours';
import { MatiereService } from '../../../core/services/matiere/matiere.service';
import { Ue } from '../../../core/models/ue/ue';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { CoursService } from '../../../core/services/cours/cours.service';

@Component({
  selector: 'app-new-cours',
  templateUrl: './new-cours.component.html',
  styleUrls: ['./new-cours.component.sass'],
})
export class NewCoursComponent implements OnInit {
  cours = new Cours();
  submitted = false;
  // ue?: String;
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

  ngOnInit(): void {}

  getMatieres(e: any) {
    this.matiereSrv.getMatieres(e.value).subscribe({
      next: (_matieres: any) => (this.matieres = _matieres),
    });
  }

  create(){
    this.cours.classe = this.classeId
    this.srv.addCours(this.cours).subscribe({
      next: _cours => console.log(_cours)
    })
  }
}
