import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { DepenseModel } from 'src/app/core/models/depense.model';
import { EncaissementModel } from 'src/app/core/models/encaissement.model';
import { DepenseService } from 'src/app/core/services/depense/depense.service';
import { EncaissementService } from 'src/app/core/services/encaissement/encaissement.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-caisse-list',
  templateUrl: './caisse-list.component.html',
  styleUrls: ['./caisse-list.component.sass'],
})
export class CaisseListComponent implements OnInit {
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
  readonly baseUrl = environment.baseUrl;
  displayPreuve = false;
  preuveSelected: any;
  now = new Date();
  selectedMonth: { name: string; value: number };

  depenses: DepenseModel[] = [];
  totalDepense: number = 0;
  encaissements: EncaissementModel[] = [];
  totalEncaissement: number = 0;

  constructor(
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService,
    private _depenseService: DepenseService,
    private _encaissementService: EncaissementService
  ) {}

  ngOnInit(): void {
    this.selectedMonth = this.months[this.now.getMonth()];
    this._depenseService.depenses$.subscribe(data => this.depenses = data);
    this._depenseService.total$.subscribe(total => this.totalDepense = total);
    this._encaissementService.encaissements$.subscribe(data => this.encaissements = data);
    this._encaissementService.total$.subscribe(total => this.totalEncaissement = total);
    this.loadCaisse();
  }

  loadCaisse() {
    this._depenseService.getDepensesByMonth(this.selectedMonth.value)
    this._encaissementService.getEncaissementsByMonth(this.selectedMonth.value)
  }

  showPreuve(preuve: any) {
    this.preuveSelected = preuve;
    this.displayPreuve = true;
  }

  closePreuve() {
    this.preuveSelected = null;
    this.displayPreuve = false;
  }

}
