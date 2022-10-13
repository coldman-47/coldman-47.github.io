import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { BourseModel } from 'src/app/core/models/bourse/bourse.model';
import { ServiceExtraModel } from 'src/app/core/models/service/service.model';
import { BourseService } from 'src/app/core/services/bourse/bourse.service';
import { ServicesExtraService } from 'src/app/core/services/services-extra/services-extra.service';

@Component({
  selector: 'app-apprenant-detail',
  templateUrl: './apprenant-detail.component.html',
  styleUrls: ['./apprenant-detail.component.sass'],
})
export class ApprenantDetailComponent implements OnInit {
  @Input() apprenant: Apprenant;
  visibleService = false;
  visibleBourse = false;
  idService: string;
  idBourse: string;

  services$: Observable<ServiceExtraModel[]>;
  allServices: ServiceExtraModel[] = [];
  allBourses: BourseModel[] = [];

  constructor(
    private _servicesExtraService: ServicesExtraService,
    private _bourseService: BourseService
  ) {}

  ngOnInit(): void {
    this._servicesExtraService.getAllServicesExtra();
    this._bourseService.getBourses();
    this._servicesExtraService.servicesExtra$.subscribe(data => this.allServices = data);
    this._bourseService.bourses$.subscribe(data => this.allBourses = data);
    this.services$ = this._servicesExtraService.getServicesApprenant(this.apprenant._id);
  }

  onAddNewService() {
    this.visibleService = true;
  }

  onAddBourse() {
    this.visibleBourse = true;
  }

  addService(id: string) {
    this._servicesExtraService.addServiceApprenant(id, this.apprenant._id).subscribe((data) => {
      console.log(data);
      this.visibleService = false;
      this.services$ = this._servicesExtraService.getServicesApprenant(this.apprenant._id);
    });
  }

  removeService(id: string) {
    this._servicesExtraService.deleteServiceApprenant(id, this.apprenant._id  ).subscribe((data) => {
      console.log(data);
      this.services$ = this._servicesExtraService.getServicesApprenant(this.apprenant._id);
    });
  }

  addBourse(id: string) {
    this._bourseService.addBourseApprenant(id, this.apprenant._id).subscribe((data) => {
      console.log(data);
      this.visibleBourse = false;
    });
  }
  deleteBourse(id: string) {
    this._bourseService.deleteBourseApprenant(id, this.apprenant._id).subscribe((data) => {
      console.log(data);
      this.visibleBourse = false;
    });
  }

}
