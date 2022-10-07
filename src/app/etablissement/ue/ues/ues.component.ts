import { Component, Input, OnInit } from '@angular/core';
import { Ue } from 'src/app/core/models/ue/ue';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';
import { UeService } from 'src/app/core/services/ue/ue.service';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { NiveauService } from '../../../core/services/niveaux/niveau.service';

@Component({
  selector: 'app-ues',
  templateUrl: './ues.component.html',
  styleUrls: ['./ues.component.sass'],
})
export class UesComponent implements OnInit {
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  submitted = false;
  matiereForm!: FormGroup;
  selected?: any;
  matieres: any[] = [];

  constructor(
    private matiereSrv: MatiereService,
    fb: FormBuilder,
    srv: UeService,
    private filiereSrv: FiliereService,
    private niveauSrv: NiveauService
  ) {
    this.matiereForm = fb.group({
      label: [null, Validators.required],
      credits: [null, Validators.required],
      volumeHoraire: [null, Validators.required],
      coefficient: [null, Validators.required],
    });
    filiereSrv.filiere.subscribe({
      next: () =>
        srv.getUes().subscribe({
          next: (res: any) => (this.ues = res[0].ues),
        }),
    });
  }

  ngOnInit(): void {
    // this.srv.getUes().subscribe({
    //   next: ue => console.log(ue)
    // });
  }

  get controls() {
    return this.matiereForm.controls;
  }

  add() {
    this.submitted = true;
    if (this.matiereForm.valid) {
      const matiere = this.matiereForm.value;
      matiere.ue = this.selected?._id;
      matiere.classe = this.classeId;
      matiere.filiere = this.filiereSrv.filiere.value;
      matiere.niveau = this.niveauSrv.niveau.value;
      console.log(matiere);
      
      this.matiereSrv.addMatiere(matiere).subscribe({
        next: (_matiere) => console.log(_matiere),
      });
    }
  }

  getMatieres(ue: Ue) {
    this.matiereSrv.getMatieres(<string>ue._id).subscribe({
      next: (_matieres) => console.log(_matieres)
    })
    this.selected = this.selected !== ue ? ue : undefined;
    this.matieres = []
    if (this.selected) {
      this.selected.matieres.forEach((matiereId: string) => {
        this.matiereSrv.getMatiere(matiereId).subscribe({
          next: (_matiere) => {
            console.log(_matiere);
            if(_matiere) this.matieres.push(_matiere);
          },
        });
      });
    }
  }
}
