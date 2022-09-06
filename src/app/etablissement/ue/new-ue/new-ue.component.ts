import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Ue } from 'src/app/core/models/ue/ue';
import { UeService } from '../../../core/services/ue/ue.service';
import { Cancel } from '../../../shared/utilities/cancel/cancel';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-new-ue',
  templateUrl: './new-ue.component.html',
  styleUrls: ['./new-ue.component.sass'],
})
export class NewUeComponent extends Cancel implements OnInit {
  submitted = false;
  ue = new Ue();

  constructor(private srv: UeService, private messageSrv: MessageService, confirmSrv: ConfirmationService) {
    super(confirmSrv);
  }

  ngOnInit(): void {}

  create() {
    this.submitted = true;
    this.srv.addUe(this.ue).subscribe({
      next: (res) => {
        this.ue = new Ue();
        this.messageSrv.add({
          summary: 'La filière a été créée',
          severity: 'success'
        });
        this.submitted = false;
        this.status.emit(false);
      }
    });
  }
}
