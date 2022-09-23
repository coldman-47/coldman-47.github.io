import { Component, Input, OnInit } from '@angular/core';
import { Ue } from 'src/app/core/models/ue/ue';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereService } from 'src/app/core/services/matiere/matiere.service';

@Component({
  selector: 'app-ues',
  templateUrl: './ues.component.html',
  styleUrls: ['./ues.component.sass']
})
export class UesComponent implements OnInit {
  @Input() ues!: Ue[];
  @Input() classeId?: string;
  submitted = false;
  matiereForm!: FormGroup;
  selected?: Ue;

  constructor(private matiereSrv: MatiereService, fb: FormBuilder) {
    this.matiereForm = fb.group({
      label: [null, Validators.required],
      credits: [null, Validators.required],
      volumeHoraire: [null, Validators.required],
      coefficient: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get controls(){
    return this.matiereForm.controls;
  }

  add(){
    this.submitted = true;
    if(this.matiereForm.valid){
      const matiere = this.matiereForm.value;
      matiere.ue = this.selected?._id;
      matiere.classe = this.classeId;
      this.matiereSrv.addMatiere(matiere).subscribe({
        next: (_matiere) => console.log(_matiere)
        
      })
    }

  }

}
