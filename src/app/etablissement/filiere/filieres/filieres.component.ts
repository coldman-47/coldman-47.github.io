import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { Filiere } from '../../../core/models/filiere/filiere';
import { StepEvent } from '../../../shared/utilities/step-event/step-event';
import { MenuItem } from 'primeng/api';
import { ClasseService } from '../../../core/services/classe/classe.service';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.sass'],
})
export class FilieresComponent extends StepEvent implements OnInit {

  filieres: Filiere[] = this.srv.filieres.value;
  @Output() _filieres = new EventEmitter();
  @Output() _filiere = new EventEmitter();
  display = false;
  ue = false;
  btnItems!: MenuItem[];
  items = [
    {
      id: 0,
      label: "Filières"
    },
    {
      id: 1,
      label: "Ue",
      disable: true
    }
  ];
  active = 0;

  constructor(private srv: FiliereService, private classeSrv: ClasseService) {
    super();
    srv.filieres.subscribe({
      next: (_filieres: any) => {
        this.filieres = _filieres;
        this._filieres.emit(_filieres);
      }
    });
    this.btnItems = [
      {
        tooltipOptions: {
          tooltipLabel: "Filière",
          tooltipPosition: "left"
        },
        icon: 'pi pi-box',
        command: () => {
          this.ue = false;
          this.display = true;
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: "UE",
          tooltipPosition: "left"
        },
        icon: 'pi pi-table',
        tooltipPosition: 'left',
        command: () => this.ue = this.display = true
      }
    ];
  }

  ngOnInit(): void {
    this.srv.filieres.subscribe({
      next: (_filieres) => this.filieres = _filieres
    });
  }

  getClasses(idFiliere?: string){
    this.classeSrv.getClassesByGrade(<string>idFiliere).subscribe({
      next:(res) => {
        this._filiere.emit(res);
        this.srv.filiere.next(<string>idFiliere);
      }
      
    });
  }
}
