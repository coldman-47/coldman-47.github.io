import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { Filiere } from '../../../core/models/filiere/filiere';
import { StepEvent } from '../../../shared/utilities/step-event/step-event';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.sass'],
})
export class FilieresComponent extends StepEvent implements OnInit {

  filieres: Filiere[] = [];
  @Output() _filieres = new EventEmitter();

  btnItems = [
    {
      label: 'Filière',
      icon: 'pi pi-book'
    }
  ]

  constructor(srv: FiliereService) {
    super();
    srv.getFilieres().subscribe({
      next: (_filieres: any) => {
        this.filieres = _filieres;
        this._filieres.emit(_filieres);
      }
    });
  }

  ngOnInit(): void {}
}
