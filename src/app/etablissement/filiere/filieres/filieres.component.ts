import { Component, OnInit } from '@angular/core';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { ClasseService } from '../../../core/services/classe/classe.service';
import { Classe } from '../../../core/models/classe/classe';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.sass'],
})
export class FilieresComponent implements OnInit {
  cycles = [];
  activeTab = 'classes';
  display = false;
  items = [
    { label: 'Filières', icon: 'pi pi-fw pi-home', id: 'filieres' },
    { label: 'Classes', icon: 'pi pi-fw pi-calendar', id: 'classes' },
  ];
  classes: Classe[] = [];

  constructor(srv: FiliereService, classeSrv: ClasseService) {
    srv.getCycles();
    srv.cycles.subscribe({
      next: (cycles: any) => {
        this.cycles = cycles.map((_cycle: any) => {
          _cycle.icon = 'pi pi-book';
          if (_cycle.niveaux.length)
            _cycle.items = _cycle.niveaux.map((_niveau: any) => {
              let { label } = _niveau;
              let command = () =>
                classeSrv.getClassesByGrade(_niveau._id).subscribe({
                  next: (_res: any) => this.classes = _res,
                });
              return { label, command };
            });
          return _cycle;
        });
      },
    });
  }

  ngOnInit(): void {}
}
