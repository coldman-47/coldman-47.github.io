import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../core/services/info/info.service';
import { CycleService } from 'src/app/core/services/cycle/cycle.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { ClasseService } from 'src/app/core/services/classe/classe.service';
import { NiveauService } from 'src/app/core/services/niveaux/niveau.service';
import { Classe } from 'src/app/core/models/classe/classe';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.sass']
})
export class InfosComponent implements OnInit {

  cycles = [];
  cycle: any;
  classes: Classe[] = [];
  info: any = {};
  apprenants: Apprenant[] = []

  constructor(private srv: InfoService, cycleSrv: CycleService, private classeSrv: ClasseService, public niveauSrv: NiveauService, private apprenantSrv: ApprenantService) { 
    cycleSrv.getCycles();
    cycleSrv.cycles.subscribe({
      next: (_cycles: any) => this.cycles = _cycles
    });
  }

  ngOnInit(): void {
    this.srv.getInfos().subscribe({
      next: (res) => console.log(res)
    })
  }

  getFilieres(niveau: any){
    this.classes = [];
    niveau.filieres.forEach((_lvl: string) => {
      this.classeSrv.getClassesByGrade(_lvl).subscribe({
        next: (res: any) => this.classes = [...this.classes, ...res]
      });
    });
  }

  getApprenants(classeId: string){
    this.apprenantSrv.getApprenants(classeId).subscribe({
      next: (res: any) => this.apprenants = res
    })
  }

  create(){
    this.srv.addInfo(this.info).subscribe({
      next: res => console.log(res)
    })
  }

}
