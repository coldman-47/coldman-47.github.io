import { Component, OnInit } from '@angular/core';
import { Classe } from 'src/app/core/models/classe/classe';
import { ClasseService } from 'src/app/core/services/classe/classe.service';
import { CycleService } from '../../core/services/cycle/cycle.service';
import { MatiereService } from '../../core/services/matiere/matiere.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { NiveauService } from '../../core/services/niveaux/niveau.service';

@Component({
  selector: 'app-pedagogie',
  templateUrl: './pedagogie.component.html',
  styleUrls: ['./pedagogie.component.sass']
})
export class PedagogieComponent implements OnInit {

  cycles = [];
  activeTab?: string;
  display = false;
  items = [
    { label: 'Filières', icon: 'pi pi-fw pi-home', id: 'filieres' },
    { label: 'Classes', icon: 'pi pi-fw pi-calendar', id: 'classes' },
  ];
  classes: Classe[] = [];

  constructor(classeSrv: ClasseService, cycleSrv: CycleService, filiereSrv: FiliereService, niveauSrv: NiveauService) {
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
                  filiereSrv.getFilieres(_niveau._id).subscribe({
                    next: (_filieres: any) => {
                      filiereSrv.filieres.next(_filieres);
                      niveauSrv.niveau.next(_niveau._id);
                      this.activeTab = "classes";
                    }
                  });
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
