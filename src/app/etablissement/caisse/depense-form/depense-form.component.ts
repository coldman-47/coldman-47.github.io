import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DepenseModel } from 'src/app/core/models/depense.model';
import { DepenseService } from 'src/app/core/services/depense/depense.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-depense-form',
  templateUrl: './depense-form.component.html',
  styleUrls: ['./depense-form.component.sass'],
})
export class DepenseFormComponent implements OnInit {
  depenseForm: FormGroup = new FormGroup({
    label: new FormControl('', [Validators.required]),
    montant: new FormControl('', [Validators.required, Validators.min(500)]),
    // preuves: new FormControl(null),
  });

  preuves: any = null;

  depense: DepenseModel;
  isEdit: boolean = false;
  title: string = 'Nouvelle dépense';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _depenseService: DepenseService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      if (params['id']) {
        this._depenseService
          .getDepense(params['id'])
          .subscribe((data: DepenseModel) => {
            this.depense = data;
            this.title = 'Modifier dépense';
            this.isEdit = true;
            this.depenseForm.patchValue(data);
          });
      }
    });
  }

  onUpload(event: any) {
    this.preuves = event.currentFiles[0];
  }

  clear() {
    this.preuves = null;
  }

  onSubmit() {
    if (this.depenseForm.invalid) {
      return;
    }

    this.depense = {
      ...this.depense,
      ...this.depenseForm.value,
      preuves: this.preuves
    };

    if (this.isEdit) {
      this._depenseService.updateDepense(this.depense).subscribe({
        next: () => {
          this._router.navigate(['/etablissement/caisses']);
        },
      });
    } else {
      this._depenseService.addDepense(this.depense).subscribe({
        next: () => {
          this._router.navigate(['/etablissement/caisses']);
        },
      });
    }
  }
}
