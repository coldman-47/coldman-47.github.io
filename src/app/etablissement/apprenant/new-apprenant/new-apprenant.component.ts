import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';

@Component({
  selector: 'app-new-apprenant',
  templateUrl: './new-apprenant.component.html',
  styleUrls: ['./new-apprenant.component.sass']
})
export class NewApprenantComponent implements OnInit {

  apprenant = new Apprenant();
  submitted = false;

  apprenantForm = this.fb.group({
    prenom: [null, Validators.required],
    nom: [null, Validators.required],
    email: [null, [Validators.email, Validators.required]],
    telephone: [null, Validators.required],
    departement: [null, Validators.required]
  });

  constructor(private srv: ApprenantService, private fb: FormBuilder, private messageSrv: MessageService) { }

  ngOnInit(): void {
    this.controls;
  }

  get controls(){
    return this.apprenantForm.controls;
  }

  create(){
    this.submitted = false;
    this.srv.addApprenant(<Apprenant>this.apprenantForm.value).subscribe({
      next: (res) => {
        this.submitted = false;
        this.apprenantForm.reset();
        this.messageSrv.add({severity: 'success', summary: 'Création réussie', detail: 'Un agent a été ajouté au apprenant'})
      },
      error: (err) => this.messageSrv.add({severity: 'error', summary: 'Une erreur est survenue', detail: err.error})
    });
  }


}
