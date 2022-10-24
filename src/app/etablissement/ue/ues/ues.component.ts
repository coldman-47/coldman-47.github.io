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
  @Input() ues!: any[];
  @Input() classeId?: string;
  submitted = false;
  matiereForm!: FormGroup;
  selected?: any;
  matieres: any[] = [];

  constructor(
    private matiereSrv: MatiereService,
    fb: FormBuilder,
    private srv: UeService,
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
          next: (res: any) => {
            const ues: Ue[] = [];
            res.forEach((_obj: any) => {
              if(_obj.ue) ues.push(_obj.ue);
            });
            this.ues = ues;
          }
        }),
    });
  }

  ngOnInit(): void {
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
    this.selected = this.selected !== ue ? ue : undefined;
    this.matieres = []
    if (this.selected) this.matiereSrv.getMatieres(<string>ue._id).subscribe({
        next: (_matieres: any) => this.matieres = _matieres
      });
      // this.selected.matieres.forEach((matiereId: string) => {
      //   this.matiereSrv.getMatiere(matiereId).subscribe({
      //     next: (_matiere) => {
      //       console.log(_matiere);
      //       if(_matiere) this.matieres.push(_matiere);
      //     },
      //   });
      // });
  }

  delete(id?: string){
    this.srv.delete(id!).subscribe({
      next: (res) => console.log(res)
    });
  }
}
