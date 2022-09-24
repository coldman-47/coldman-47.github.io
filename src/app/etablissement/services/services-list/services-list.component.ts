import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ServiceExtraModel } from 'src/app/core/models/service/service.model';
import { ServicesExtraService } from 'src/app/core/services/services-extra/services-extra.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.sass']
})
export class ServicesListComponent implements OnInit {
  services: ServiceExtraModel[] = [];

  constructor(
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService,
    private _serviecExtraService: ServicesExtraService
  ) {
    this._serviecExtraService.serverSentEvent.subscribe({
      next: (data) => {
        console.log(data);

        if (data) {
          // if (agent.method === 'put') {
          //   const idx = this.services.findIndex(
          //     (s) => s._id === agent._data._id
          //   );
          //   if (idx !== -1) this.enseignant[idx] = agent._data;
          // } else {
          //   if (this.enseignant.length < 10) this.enseignant.push(agent._data);
          //   this.pagination.totalElements++;
          // }
        }
      },
    })
  }

  ngOnInit(): void {
    this._serviecExtraService.getAllServicesExtra();
    this._serviecExtraService.servicesExtra$.subscribe(services => this.services = services);
  }

  onDeleteService(id: number): void {
    this._confirmationService.confirm({
      message: 'Voulez-vous supprimer ce service?',
      header: 'Suppression',
      acceptLabel: 'Supprimer',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Annuler',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._serviecExtraService.deleteServiceExtra(id).subscribe({
          next: (data) => {
            this._messageService.add({
              severity: 'info',
              summary: 'Confirmation',
              detail: 'Service supprimé',
            });
            this._serviecExtraService.getAllServicesExtra();
          },
          error: (err) => {
            this._messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: err.error.message,
            });
          }
        });
      },
    });
  }

}
