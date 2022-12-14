import { Component, Input, OnInit } from '@angular/core';
import { Ue } from 'src/app/core/models/ue/ue';
import { Filiere } from '../../../core/models/filiere/filiere';
import { ClasseService } from '../../../core/services/classe/classe.service';
import { CycleService } from '../../../core/services/cycle/cycle.service';
import { FiliereService } from '../../../core/services/filiere/filiere.service';
import { NiveauService } from '../../../core/services/niveaux/niveau.service';
import { UeService } from '../../../core/services/ue/ue.service';

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
  activeIndex = 0;
  selected: any;
  display = false;
  visible = false;
  showCreateForm = false;
  ues?: Ue[];
  private niveau = this.niveauSrv.niveau.value;

  constructor(private srv: ClasseService, private filiereSrv: FiliereService, private ueSrv: UeService, private cycleSrv: CycleService, private niveauSrv: NiveauService) {
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
    niveauSrv.niveau.subscribe({
      next: (_niveau) => {
        if(_niveau !== this.niveau){
          this.activeIndex = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    this.cycleSrv.cycles.subscribe({
      next: (_cycles) => (this.cycles = _cycles),
    });
    this.filiereSrv.filieres.subscribe({
      next: (_filieres: any) => this.filieres = _filieres
    });
  }

  getFilieres(e:any){
    this.filieres = e;
  }

  // getUes(){
  //   this.ueSrv.getUesByClass(this.selected._id).subscribe({
  //     next: (ues: any) => this.ues = ues
  //   })
  // }

  getClasses(e: any){
    this.classes = e;
    this.activeIndex = 1;
    // this.filiereSrv.filiere.next(e);
  }

  delete(id?: string){
    this.srv.delete(id!).subscribe({
      next: (res) => console.log(res)
    });
  }
}
