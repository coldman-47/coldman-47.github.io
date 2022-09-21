import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { Redevance } from 'src/app/core/models/redevance/redevance.model';
import { RedevanceService } from 'src/app/core/services/redevance/redevance.service';

@Component({
  selector: 'app-list-redevances',
  templateUrl: './list-redevances.component.html',
  styleUrls: ['./list-redevances.component.sass'],
})
export class ListRedevancesComponent implements OnInit {
  data$?: Observable<Redevance[]>;

  constructor(
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService,
    private _redevanceService: RedevanceService
  ) {}

  ngOnInit(): void {
    this.data$ = this._redevanceService.redevances$;
    this._redevanceService.getRedevances();
  }

  getTitle(filieres?: Filiere[]): string {
    return filieres ? filieres.map((filiere) => filiere.label).join(' - ') : '';
  }

  getNiveaux(niveaux?: any[]): string {
    return niveaux ? niveaux.map((niveau) => niveau.label).join(' - ') : '';
  }

  onDelete(redevance: Redevance) {
    console.log(redevance);

    this._confirmationService.confirm({
      message: 'Voulez-vous supprimer cette redevance?',
      header: 'Suppression',
      acceptLabel: 'Supprimer',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Annuler',
      icon: 'pi pi-info-circle',
      accept: () => {
        if (redevance.redevance && redevance.redevance._id) {
          this._redevanceService.deleteRedevance(redevance.redevance._id).subscribe({
            next: (data) => {
              this._messageService.add({
                severity: 'info',
                summary: 'Confirmation',
                detail: 'Redance supprimée',
              });
              this._redevanceService.getRedevances();
            },
            error: (err) => {
              this._messageService.add({
                severity: 'error',
                summary: 'Erreur',
                detail: err.error.message,
              });
            }
          });
        }
      },
    });
  }
}
