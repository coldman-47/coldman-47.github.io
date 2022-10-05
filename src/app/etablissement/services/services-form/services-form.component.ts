import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceExtraModel } from 'src/app/core/models/service/service.model';
import { ServicesExtraService } from 'src/app/core/services/services-extra/services-extra.service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.sass']
})
export class ServicesFormComponent implements OnInit {
  serviceForm: FormGroup = new FormGroup({
    label: new FormControl(),
    tarif: new FormControl(),
    nbMois: new FormControl(),
    debutMois: new FormControl(),
  });

  service: ServiceExtraModel;
  isEdit: boolean = false;
  title: string = 'Nouveau service';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _serviceExtService: ServicesExtraService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      if (params['id']) {
        this._serviceExtService.getServiceExtraById(params['id']).subscribe((data: ServiceExtraModel) => {
          this.service = data;
          this.title = 'Modifier service';
          this.isEdit = true;
          this.serviceForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.serviceForm.invalid) { return; }

    this.service = {
      ...this.service,
      ...this.serviceForm.value
    }

    if (this.isEdit) {
      this._serviceExtService.updateServiceExtra(this.service).subscribe({
        next: () => {
          this._router.navigate(['/etablissement/services']);
        }
      });
    } else {
      this._serviceExtService.addServiceExtra(this.service).subscribe({
        next: () => {
          this._router.navigate(['/etablissement/services']);
        }
      });
    }

  }

}
