import { Component, Input, OnInit } from '@angular/core';
import { Classe } from '../../../core/models/classe/classe';
import { ClasseService } from '../../../core/services/classe/classe.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { NiveauService } from 'src/app/core/services/niveaux/niveau.service';

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.sass']
})
export class NewClasseComponent implements OnInit {

  classe = new Classe();
  submitted = false;

  constructor(private srv: ClasseService, filiereSrv: FiliereService, niveauSrv: NiveauService) {
    this.classe.filiere = filiereSrv.filiere.value;
    filiereSrv.filiere.subscribe({
      next: filiere => this.classe.filiere = filiere
    });
    this.classe.niveau = niveauSrv.niveau.value;
    niveauSrv.niveau.subscribe({
      next: niveau => this.classe.niveau = niveau
    });

  }

  ngOnInit(): void {    
  }

  create(){
    this.srv.createClasse(this.classe).subscribe({
      next: () => this.classe = new Classe()
    });
  }

}
