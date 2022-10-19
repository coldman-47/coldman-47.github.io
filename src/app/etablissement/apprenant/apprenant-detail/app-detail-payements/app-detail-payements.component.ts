import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { Etablissement } from 'src/app/core/models/etablissement/etablissement';
import { PayementModel } from 'src/app/core/models/payement.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EtablissementService } from 'src/app/core/services/etablissement/etablissement.service';
import { PayementService } from 'src/app/core/services/payement/payement.service';
import { RedevanceService } from 'src/app/core/services/redevance/redevance.service';

@Component({
  selector: 'app-app-detail-payements',
  templateUrl: './app-detail-payements.component.html',
  styleUrls: ['./app-detail-payements.component.sass']
})
export class AppDetailPayementsComponent implements OnInit {
  @Input() apprenant: Apprenant;
  visiblePaymentForm = false;
  montant: number;
  payements: PayementModel[] = [];
  payementSelected: PayementModel;
  redevance$: Observable<number>;
  displayFacture = false;
  etablissement: Etablissement;

  constructor(
    private _payementService: PayementService,
    private _authService: AuthService,
    private _etablissementService: EtablissementService,
    private _redevanceService: RedevanceService
  ) { }

  ngOnInit(): void {
    this._authService.user.subscribe((user) => {
      console.log(user);
    });
    this._payementService.payements$.subscribe(data => {
      this.payements = data
    });
    this.loadPayements();
  }

  onAddNewPayment() {
    this.visiblePaymentForm = true;
  }

  loadPayements() {
    this.redevance$ = this._redevanceService.getRedevancePonctuel(this.apprenant._id);
    this._payementService.getPayementsByApprenant(this.apprenant._id);
  }

  showFacture(payment: PayementModel) {
    this.displayFacture = true;
  }

  addPayment() {
    if (!this.montant || this.montant <= 0) return;
    const payement: PayementModel = {
      montant: this.montant,
      apprenant: this.apprenant._id
    };
    this._payementService.createPayement(payement).subscribe((data) => {
      this.loadPayements();
      this.visiblePaymentForm = false;
    });
  }

}
