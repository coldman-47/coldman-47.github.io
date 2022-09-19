import { Component, Input, OnInit } from '@angular/core';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { Classe } from '../../../core/models/classe/classe';
import { ClasseService } from '../../../core/services/classe/classe.service';

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

  constructor(private srv: ClasseService) { }

  ngOnInit(): void {
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
