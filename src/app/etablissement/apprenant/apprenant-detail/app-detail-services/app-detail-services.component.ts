import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { ServiceExtraModel } from 'src/app/core/models/service/service.model';
import { ServicesExtraService } from 'src/app/core/services/services-extra/services-extra.service';

@Component({
  selector: 'app-app-detail-services',
  templateUrl: './app-detail-services.component.html',
  styleUrls: ['./app-detail-services.component.sass'],
})
export class AppDetailServicesComponent implements OnInit {
  @Input() apprenant: Apprenant;
  @Input() services: ServiceExtraModel[] = [];
  idService: string;
  allServices: ServiceExtraModel[] = [];
  visibleService = false;

  constructor(
    private _messageService: MessageService,
    private _servicesExtraService: ServicesExtraService
  ) { }

  ngOnInit(): void {
    this._servicesExtraService.getAllServicesExtra();
    this._servicesExtraService.servicesExtra$.subscribe(
      (data) => (this.allServices = data)
    );
    // this._servicesExtraService
    //   .getServicesApprenant(this.apprenant._id)
    //   .subscribe((data) => (this.services = data));
  }

  onAddNewService() {
    this.visibleService = true;
  }

  onClose() {
    this.visibleService = false;
    this.idService = '';
  }

  addService(id: string) {
    this._servicesExtraService
      .addServiceApprenant(id, this.apprenant._id)
      .subscribe((data) => {
        this.visibleService = false;
        this.idService = '';
        this._servicesExtraService
          .getServicesApprenant(this.apprenant._id)
          .subscribe((data) => (this.services = data));
      }, (err => {
        this._messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error,
        });
      }));
  }

  removeService(id: string) {
    this._servicesExtraService
      .deleteServiceApprenant(id, this.apprenant._id)
      .subscribe((data) => {
        this._servicesExtraService
          .getServicesApprenant(this.apprenant._id)
          .subscribe((data) => (this.services = data));
      });
  }
}
