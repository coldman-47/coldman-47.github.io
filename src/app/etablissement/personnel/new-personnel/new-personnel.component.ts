import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Personnel } from 'src/app/core/models/personnel/personnel';
import { PersonnelService } from 'src/app/core/services/personnel/personnel.service';

@Component({
  selector: 'app-new-personnel',
  templateUrl: './new-personnel.component.html',
  styleUrls: ['./new-personnel.component.sass']
})
export class NewPersonnelComponent implements OnInit {

  personnel = new Personnel();
  submitted = false;

  personnelForm = this.fb.group({
    prenom: [null, Validators.required],
    nom: [null, Validators.required],
    email: [null, [Validators.email, Validators.required]],
    telephone: [null, Validators.required]
  });

  constructor(private srv: PersonnelService, private fb: FormBuilder, private messageSrv: MessageService) { }

  ngOnInit(): void {
    this.controls;
  }

  get controls(){
    return this.personnelForm.controls;
  }

  create(){
    this.submitted = false;
    this.srv.addPersonnel(<Personnel>this.personnelForm.value).subscribe({
      next: (res) => {
        this.submitted = false;
        this.personnelForm.reset();
        this.messageSrv.add({severity: 'success', summary: 'Création réussie', detail: 'Un agent a été ajouté au personnel'})
      },
      error: (err) => this.messageSrv.add({severity: 'error', summary: 'Une erreur est survenue', detail: err.error})
    });
  }

}
