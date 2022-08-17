import { Component, OnInit } from '@angular/core';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.sass'],
})
export class FilieresComponent implements OnInit {
  cycles = [];

  constructor(srv: FiliereService) {
    srv.getCycles().subscribe({
      next: (_res: any) => {
        this.cycles = _res.map((_cycle: any) => {
          _cycle.icon = 'pi pi-book';
          if (_cycle.niveaux.length)
            _cycle.items = _cycle.niveaux.map((_niveau: any) => {
              let { label } = _niveau;
              let command = () => {
                console.log(_niveau);
                
                // srv.getNiveaux(_cycle._id).subscribe({
                //   next: (_filiere) => {
                //     console.log(_filiere);
                //   },
                // });
              };
              return { label, command };
            });
          return _cycle;
        });
      },
    });
  }

  ngOnInit(): void {}
}
