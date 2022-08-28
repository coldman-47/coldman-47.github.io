import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/core/models/cours/cours';
import { MatiereService } from '../../../core/services/matiere/matiere.service';

@Component({
  selector: 'app-new-cours',
  templateUrl: './new-cours.component.html',
  styleUrls: ['./new-cours.component.sass']
})
export class NewCoursComponent implements OnInit {

  cours = new Cours();
  submitted = false;

  constructor(matiereSrv: MatiereService) {
    matiereSrv.getMatieres().subscribe({
      next(_matieres) {
        console.log(_matieres);
        
      },
    })
  }

  ngOnInit(): void {
  }

}
