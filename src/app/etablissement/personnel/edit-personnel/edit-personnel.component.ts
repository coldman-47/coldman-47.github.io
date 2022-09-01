import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Personnel } from 'src/app/core/models/personnel/personnel';
import { PersonnelService } from 'src/app/core/services/personnel/personnel.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cancel } from '../../../shared/utilities/cancel/cancel';

@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.scss'],
})
export class EditPersonnelComponent extends Cancel implements OnInit {
  @Input() personnel?: Personnel;
  submitted = false;

  personnelForm!: FormGroup;

  constructor(
    private personnelSrv: PersonnelService,
    private fb: FormBuilder,
    private messageSrv: MessageService,
    confirmSrv: ConfirmationService
  ) {
    super(confirmSrv);
  }

  ngOnInit(): void {
    this.personnelForm = this.fb.group({
      prenom: [this.personnel?.prenom, Validators.required],
      nom: [this.personnel?.nom, Validators.required],
      email: [this.personnel?.email, [Validators.email, Validators.required]],
      telephone: [this.personnel?.telephone, Validators.required],
    });

    this.controls;
  }

  get controls() {
    return this.personnelForm.controls;
  }

  update() {
    this.submitted = true;
    this.personnelSrv
      .editPersonnel(<string>this.personnel!._id, this.personnelForm.value)
      .subscribe({
        next: (res) => {
          this.status.emit(false);
          this.messageSrv.add({
            severity: 'success',
            summary: 'Mise à réussie',
            detail: 'Un agent a été mis à jour',
          });
        },
        error: (err) =>
          this.messageSrv.add({
            severity: 'error',
            summary: 'Une erreur est survenue',
            detail: err.error,
          }),
      });
  }
}
