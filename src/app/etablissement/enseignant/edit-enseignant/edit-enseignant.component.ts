import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';
import { Cancel } from '../../../shared/utilities/cancel/cancel';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.sass']
})
export class EditEnseignantComponent extends Cancel implements OnInit {

  @Input() enseignant!: Enseignant;
  submitted = false;

  enseignantForm!: FormGroup

  constructor(private srv: EnseignantService, private fb: FormBuilder, private messageSrv: MessageService, confirmSrv: ConfirmationService) {
    super(confirmSrv);
  }

  ngOnInit(): void {
    this.enseignantForm = this.fb.group({
      prenom: [this.enseignant.prenom, Validators.required],
      nom: [this.enseignant.nom, Validators.required],
      email: [this.enseignant.email, [Validators.email, Validators.required]],
      telephone: [this.enseignant.telephone, Validators.required],
      adresse: [this.enseignant.adresse, Validators.required]
    });
    this.controls;
  }

  get controls(){
    return this.enseignantForm.controls;
  }

  update(){}

}
