import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { Etablissement } from 'src/app/core/models/etablissement/etablissement';
import { PayementModel } from 'src/app/core/models/payement.model';
import { ServiceExtraModel } from 'src/app/core/models/service/service.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EtablissementService } from 'src/app/core/services/etablissement/etablissement.service';
import { PayementService } from 'src/app/core/services/payement/payement.service';
import { RedevanceService } from 'src/app/core/services/redevance/redevance.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-app-detail-payements',
  templateUrl: './app-detail-payements.component.html',
  styleUrls: ['./app-detail-payements.component.sass'],
})
export class AppDetailPayementsComponent implements OnInit {
  @Input() apprenant: Apprenant;
  @Input() services: ServiceExtraModel[] = [];
  readonly baseUrl = environment.baseUrl;
  visiblePaymentForm = false;

  montant: number;
  moisAregler: number = 1;
  preuves: any;

  payements: PayementModel[] = [];
  payementSelected: PayementModel | null;
  redevance$: Observable<number>;
  displayFacture = false;
  displayPreuve = false;
  preuveSelected: any;
  etablissement: Etablissement;

  totalServices = 0;
  scolarite = 0;
  servicesMensuels: ServiceExtraModel[] = [];

  months: { name: string; value: number }[] = [
    { name: 'Janvier', value: 1 },
    { name: 'Février', value: 2 },
    { name: 'Mars', value: 3 },
    { name: 'Avril', value: 4 },
    { name: 'Mai', value: 5 },
    { name: 'Juin', value: 6 },
    { name: 'Juillet', value: 7 },
    { name: 'Août', value: 8 },
    { name: 'Septembre', value: 9 },
    { name: 'Octobre', value: 10 },
    { name: 'Novembre', value: 11 },
    { name: 'Décembre', value: 12 },
  ];

  constructor(
    private _payementService: PayementService,
    private _messageService: MessageService,
    private _authService: AuthService,
    private _etablissementService: EtablissementService,
    private _redevanceService: RedevanceService
  ) {}

  ngOnInit(): void {
    this._authService.user.subscribe((user) => {
      this._etablissementService
        .getEtablissementById(user.etablissement)
        .subscribe((data) => {
          this.etablissement = data;
        });
    });
    this._payementService.payements$.subscribe((data) => {
      this.payements = data;
    });
    this.loadPayements();
  }

  onAddNewPayment() {
    this.visiblePaymentForm = true;
  }

  loadPayements() {
    this.redevance$ = this._redevanceService.getRedevancePonctuel(
      this.apprenant._id
    );
    this._payementService.getPayementsByApprenant(this.apprenant._id);
  }

  showPreuve(preuve: any) {
    this.preuveSelected = preuve;
    this.displayPreuve = this.preuveSelected !== null;
  }

  closePreuve() {
    this.preuveSelected = null;
    this.displayPreuve = false;
  }

  showFacture(payment: PayementModel) {
    this.payementSelected = payment;
    this.displayFacture =
      this.payementSelected !== null && this.etablissement !== null;

    this.servicesMensuels = this.services.filter((s) => {
      let current = +s.debutMois;
      let mois: number[] = [current];
      for (let i = 1; i < s.nbMois; i++) {
        current += 1;
        current = current > 12 ? 1 : current;
        mois.push(current);
      }
      return mois.includes(payment.moisAregler);
    });
    this.totalServices = this.servicesMensuels
      .map((x) => x.tarif)
      .reduce((prev, curr) => prev + +curr, 0);
    this.scolarite = payment.montant - this.totalServices;
  }

  closeDialog() {
    this.displayFacture = false;
    this.payementSelected = null;
  }

  onUpload(event: any) {
    this.preuves = event.currentFiles[0];
  }

  clear() {
    this.preuves = null;
  }

  getMonth(moisAregler: number | undefined): string {
    return moisAregler ? this.months[moisAregler - 1].name : '';
  }

  closeForm() {
    this.montant = 0;
    this.moisAregler = 1;
    this.preuves = null;
    this.visiblePaymentForm = false;
  }

  addPayment() {
    if (
      !this.montant ||
      this.montant <= 0 ||
      !this.moisAregler ||
      this.moisAregler <= 0
    ) {
      return;
    }
    const payement: PayementModel = {
      montant: this.montant,
      moisAregler: this.moisAregler,
      preuves: this.preuves,
      apprenant: this.apprenant._id,
    };
    this._payementService.createPayement(payement).subscribe(
      (data) => {
        this.loadPayements();
        this.closeForm();
      },
      (err) => {
        this._messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error,
        });
      }
    );
  }
}
