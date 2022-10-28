import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Etablissement } from 'src/app/core/models/etablissement/etablissement';
import { EtablissementService } from 'src/app/core/services/etablissement/etablissement.service';

@Component({
  selector: 'app-edit-etablissement',
  templateUrl: './edit-etablissement.component.html',
  styleUrls: ['./edit-etablissement.component.sass']
})
export class EditEtablissementComponent implements OnInit {

  @Input() etablissement!: Etablissement;
  submitted = false;
  @Input() roles: any[] = [];
  logo: any;
  loginPage = false;

  constructor(private etablissementSrv: EtablissementService, private messageSrv: MessageService, route: Router) {
    if(route.url.split('/login').length === 2) this.loginPage = true;
    
  }
  
  ngOnInit(): void {
  }

  update() {
    this.submitted = true;
    if (this.logo) this.etablissement.logo = this.logo;
    this.etablissementSrv.editEtablissement(this.etablissement).subscribe({
      next: (res) => {
        this.messageSrv.add({
          severity: 'success',
          summary: 'Création réussie',
          detail: this.loginPage ? 'Connectez vous avec les identifiant du directeur qui vous a été envoyé par email' : 'Un agent a été ajouté au etablissements',
        });
        this.submitted = false;
      },
      error: (err) =>
        this.messageSrv.add({
          severity: 'error',
          summary: 'Une erreur est survenue',
          detail: err.error,
        }),
    });
  }

  getImg(e: any) {
    const img = new BehaviorSubject<any>(null);
    img.subscribe({
      next: (val) => (this.logo = val),
    });
    e.currentFiles.forEach((file: File) => {
      const fr = new FileReader();
      fr.onloadend = function () {
        img.next(<string>fr.result);
      };
      fr.readAsDataURL(file);
    });
  }

}
