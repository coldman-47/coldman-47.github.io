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
  @Input() classes?: any;
  item = [
    { label: 'Pédagogie' },
    { label: 'Classe' },
    { label: 'Apprenants' },
    { label: 'Details' },
  ];
  activeIndex = 1;
  selected: any;
  display = false;

  constructor(private srv: ClasseService, private filiereSrv: FiliereService) {
    srv.serverSentEvent.subscribe({
      next: (classe: any) => {
        if(classe){
          if (classe.method === 'put') {
            const idx = this.classes.findIndex(
              (_classe: any) => _classe._id === classe._data._id
            );
            if (idx !== -1) this.classes[idx] = classe._data;
          } else {
            if (this.classes.length < 10) this.classes.push(classe._data);
            // this.pagination.totalElements++;
          }
        }
      },
    });
  }

  ngOnInit(): void {
    this.filiereSrv.cycles.subscribe({
      next: (_cycles) => (this.cycles = _cycles),
    });
    this.filiereSrv.getFilieres().subscribe({
      next: (_filieres: any) => this.filieres = _filieres
    });
  }

  getFilieres(e:any){
    this.filieres = e;
  }
}
