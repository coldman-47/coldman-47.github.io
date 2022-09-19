import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';
import { Cancel } from '../../../shared/utilities/cancel/cancel';
import { ConfirmationService } from 'primeng/api';
import { DataUriToBlobPipe } from 'src/app/core/pipes/file/data-uri-to-blob.pipe';

@Component({
  selector: 'app-edit-apprenant',
  templateUrl: './edit-apprenant.component.html',
  styleUrls: ['./edit-apprenant.component.sass']
})
export class EditApprenantComponent extends Cancel implements OnInit {

  @Input() apprenant!: Apprenant;
  @Input() classeId!: string;
  submitted = false;

  apprenantForm!: FormGroup;
  avatar: any;
  photo: any;

  constructor(private srv: ApprenantService,private fb: FormBuilder,private messageSrv: MessageService, confirmSrv: ConfirmationService) {
    super(confirmSrv);
  }
  
  ngOnInit(): void {
    const pipe = new DataUriToBlobPipe();
    if(this.apprenant.photo) this.photo = pipe.transform(this.apprenant.photo);
    this.apprenantForm = this.fb.group({
      prenom: [this.apprenant.prenom, Validators.required],
      nom: [this.apprenant.nom, Validators.required],
      email: [this.apprenant.email, [Validators.email, Validators.required]],
      telephone: [this.apprenant.telephone, Validators.required],
      adresse: [this.apprenant.adresse, Validators.required],
      dateNaiss: [this.apprenant.dateNaiss, Validators.required],
      tuteur: this.fb.group({
        prenom: [null, Validators.required],
        nom: [null, Validators.required],
        email: [null, [Validators.email, Validators.required]],
        telephone: [null, Validators.required],
        adresse: [null, Validators.required]
      })
    });
    this.srv.getTuteur(<string>this.apprenant.tuteur).subscribe({
      next: (_tuteur: any) => this.controls['tuteur'] = this.fb.group({
        prenom: [_tuteur.prenom, Validators.required],
        nom: [_tuteur.nom, Validators.required],
        email: [_tuteur.email, [Validators.email, Validators.required]],
        telephone: [_tuteur.telephone, Validators.required],
        adresse: [_tuteur.adresse, Validators.required]
      })
    });
    this.controls;
  }

  get controls() {
    return this.apprenantForm.controls;
  }

  get tuteur(){
    return this.controls["tuteur"] as FormGroup;
  }

  update() {
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
