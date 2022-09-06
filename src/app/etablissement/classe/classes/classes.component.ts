import { Component, Input, OnInit } from '@angular/core';
import { FiliereService } from '../../../core/services/filiere/filiere.service';
import { Filiere } from '../../../core/models/filiere/filiere';
import { ClasseService } from '../../../core/services/classe/classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.sass'],
})
export class ClassesComponent implements OnInit {
  filieres: Filiere[] = [];
  cycles: any = [];
  @Input() classes: any = [];
  item = [
    { label: 'Pédagogie' },
    { label: 'Classe' },
    { label: 'Apprenants' },
    { label: 'Details' },
  ];
  activeIndex = 1;
  selected: any;
  display = false;

  constructor(private srv: ClasseService, private filiereSrv: FiliereService) {}

  ngOnInit(): void {
    this.filiereSrv.cycles.subscribe({
      next: (_cycles) => (this.cycles = _cycles),
    });
  }

  getFilieres(e:any){
    this.filieres = e;
  }
}
