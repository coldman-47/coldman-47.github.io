import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';
import { BourseModel } from 'src/app/core/models/bourse/bourse.model';
import { ServiceExtraModel } from 'src/app/core/models/service/service.model';
import { TuteurModel } from 'src/app/core/models/tuteur.model';
import { BourseService } from 'src/app/core/services/bourse/bourse.service';
import { ServicesExtraService } from 'src/app/core/services/services-extra/services-extra.service';

@Component({
  selector: 'app-apprenant-detail',
  templateUrl: './apprenant-detail.component.html',
  styleUrls: ['./apprenant-detail.component.sass'],
})
export class ApprenantDetailComponent implements OnInit {
  @Input() apprenant: Apprenant;
  @Input() tuteur: TuteurModel;

  visibleBourse = false;
  idBourse: string;

  services: ServiceExtraModel[];
  allBourses: BourseModel[] = [];

  constructor(
    private _bourseService: BourseService,
    private _messageService: MessageService,
    private _serviceExtraService: ServicesExtraService
  ) {}

  ngOnInit(): void {
    this._bourseService.getBourses();
    this._bourseService.bourses$.subscribe(data => this.allBourses = data);
    this._serviceExtraService
      .getServicesApprenant(this.apprenant._id)
      .subscribe((data) => (this.services = data));
  }

  onAddBourse() {
    this.visibleBourse = true;
  }

  addBourse(id: string) {
    this._bourseService.addBourseApprenant(id, this.apprenant._id).subscribe((data) => {
      this._messageService.add({
        severity: 'success',
        summary: 'Confirmation',
        detail: data,
      });
      this.visibleBourse = false;
    });
  }
  deleteBourse(id: string) {
    this._bourseService.deleteBourseApprenant(id, this.apprenant._id).subscribe((data) => {
      this.visibleBourse = false;
    });
  }

}
