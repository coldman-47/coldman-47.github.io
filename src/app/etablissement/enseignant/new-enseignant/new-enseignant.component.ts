import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';

@Component({
  selector: 'app-new-enseignant',
  templateUrl: './new-enseignant.component.html',
  styleUrls: ['./new-enseignant.component.sass']
})
export class NewEnseignantComponent implements OnInit {

  enseignant = new Enseignant();
  submitted = false;

  enseignantForm = this.fb.group({
    prenom: [null, Validators.required],
    nom: [null, Validators.required],
    email: [null, [Validators.email, Validators.required]],
    telephone: [null, Validators.required],
    adresse: [null, Validators.required]
  });

  constructor(private srv: EnseignantService, private fb: FormBuilder, private messageSrv: MessageService) { }

  ngOnInit(): void {
    this.controls;
  }

  get controls(){
    return this.enseignantForm.controls;
  }

  create(){
    this.submitted = false;
    this.srv.addEnseignant(<Enseignant>this.enseignantForm.value).subscribe({
      next: (res) => {
        this.submitted = false;
        this.enseignantForm.reset();
        this.messageSrv.add({severity: 'success', summary: 'Création réussie', detail: 'Un agent a été ajouté au enseignant'})
      },
      error: (err) => this.messageSrv.add({severity: 'error', summary: 'Une erreur est survenue', detail: err.error})
    });
  }

}
