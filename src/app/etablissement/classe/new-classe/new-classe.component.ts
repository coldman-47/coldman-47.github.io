import { Component, Input, OnInit } from '@angular/core';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { Classe } from '../../../core/models/classe/classe';
import { ClasseService } from '../../../core/services/classe/classe.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.sass']
})
export class NewClasseComponent implements OnInit {

  classe = new Classe();
  submitted = false;
  @Input() filieres!: Filiere[];
  @Input() cycles: any;
  niveaux: any;
  _filieres: any[] = this.filiereSrv.filieres.value;

  constructor(private srv: ClasseService, private filiereSrv: FiliereService) { }

  ngOnInit(): void {
    this.filiereSrv.filieres.subscribe({
      next: (matieres) => this._filieres = matieres
    });
    
  }

  getNiveaux(e: any){
    this.niveaux = this.cycles.find((cycle:any) => cycle._id == e.value).niveaux;
  }

  create(){
    this.srv.createClasse(this.classe).subscribe({
      next: () => this.classe = new Classe()
    });
  }

}
