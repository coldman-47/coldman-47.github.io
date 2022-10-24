import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private _servicesExtraService: ServicesExtraService) {}

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

  addService(id: string) {
    this._servicesExtraService
      .addServiceApprenant(id, this.apprenant._id)
      .subscribe((data) => {
        this.visibleService = false;
        this._servicesExtraService
          .getServicesApprenant(this.apprenant._id)
          .subscribe((data) => (this.services = data));
      });
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
