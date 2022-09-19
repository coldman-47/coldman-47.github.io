import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';

@Component({
  selector: 'app-new-apprenant',
  templateUrl: './new-apprenant.component.html',
  styleUrls: ['./new-apprenant.component.sass'],
})
export class NewApprenantComponent implements OnInit {
  apprenant = new Apprenant();
  @Input() classeId!: string;
  submitted = false;

  apprenantForm = this.fb.group({
    prenom: [null, Validators.required],
    nom: [null, Validators.required],
    email: [null, [Validators.email, Validators.required]],
    telephone: [null, Validators.required],
    adresse: [null, Validators.required],
    dateNaiss: [null, Validators.required],
    tuteur: this.fb.group({
      prenom: [null, Validators.required],
      nom: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      telephone: [null, Validators.required],
      adresse: [null, Validators.required]
    })
  });
  avatar: any;

  constructor(private srv: ApprenantService,private fb: FormBuilder,private messageSrv: MessageService) {}

  ngOnInit(): void {
    this.controls;
  }

  get controls() {
    return this.apprenantForm.controls;
  }

  create() {
    this.submitted = false;
    const apprenant: Apprenant = <Apprenant>this.apprenantForm.value;
    apprenant.photo = this.avatar;
    apprenant.classe = this.classeId;
    apprenant.matricule = "dagnkoygenerer-"+Math.random();
    this.srv.addApprenant(apprenant).subscribe({
      next: () => {
        this.submitted = false;
        this.apprenantForm.reset();
        this.avatar = undefined;
        this.messageSrv.add({
          severity: 'success',
          summary: 'Création réussie',
          detail: 'Un agent a été ajouté au apprenant'
        });
      },
      error: (err) =>
        this.messageSrv.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: err.error
        })
    });
  }

  getImg(e: any) {
    const img = new BehaviorSubject<any>(null);
    img.subscribe({
      next: (val) => (this.avatar = val)
    });
    e.currentFiles.forEach((file: File) => {
      const fr = new FileReader();
      fr.onloadend = () => img.next(<string>fr.result);
      fr.readAsDataURL(file);
    });
  }
}
