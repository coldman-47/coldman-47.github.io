import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';
import { Cours } from '../../../core/models/cours/cours';
import { Apprenant } from '../../../core/models/apprenant/apprenant';

@Component({
  selector: 'app-details-cours',
  templateUrl: './details-cours.component.html',
  styleUrls: ['./details-cours.component.sass']
})
export class DetailsCoursComponent implements OnInit {

  @Input() cours: Cours | any;
  apprenants: any[];
  absents: Apprenant[];

  constructor(apprenantSrv: ApprenantService, private msgSrv: MessageService) {
    this.apprenants = apprenantSrv.apprenants.value;
    apprenantSrv.apprenants.subscribe({
      next: (_apprenants) => this.apprenants = _apprenants
    });
  }

  ngOnInit(): void {
    this.absents = this.apprenants.filter(_apprenant => this.cours.absents.includes(_apprenant._id));
  }

}
