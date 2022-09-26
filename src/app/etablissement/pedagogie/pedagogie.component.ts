import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/core/models/classe/classe';
import { ClasseService } from 'src/app/core/services/classe/classe.service';
import { CycleService } from '../../core/services/cycle/cycle.service';

@Component({
  selector: 'app-pedagogie',
  templateUrl: './pedagogie.component.html',
  styleUrls: ['./pedagogie.component.sass']
})
export class PedagogieComponent implements OnInit {

  cycles = [];
  activeTab = 'classes';
  display = false;
  items = [
    { label: 'Filières', icon: 'pi pi-fw pi-home', id: 'filieres' },
    { label: 'Classes', icon: 'pi pi-fw pi-calendar', id: 'classes' },
  ];
  classes: Classe[] = [];

  constructor(classeSrv: ClasseService, cycleSrv: CycleService) {
    cycleSrv.getCycles();
    cycleSrv.cycles.subscribe({
      next: (cycles: any) => {
        this.cycles = cycles.map((_cycle: any) => {
          _cycle.icon = 'pi pi-book';
          if (_cycle.niveaux.length)
            _cycle.items = _cycle.niveaux.map((_niveau: any) => {
              let { label } = _niveau;
              let command = () => classeSrv.getClassesByGrade(_niveau._id).subscribe({
                next: (_res: any) => {
                  this.classes = _res;
                  cycleSrv.cycle.next(_cycle);
                },
              });
              return { label, command };
            });
          return _cycle;
        });
      },
    });
  }

  ngOnInit(): void {
  }

}
