import { Component, OnInit } from '@angular/core';
import { Filiere } from 'src/app/core/models/filiere/filiere';
import { FiliereService } from 'src/app/core/services/filiere/filiere.service';
import { MessageService } from 'primeng/api';
import { Cancel } from '../../../shared/utilities/cancel/cancel';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-new-filiere',
  templateUrl: './new-filiere.component.html',
  styleUrls: ['./new-filiere.component.sass']
})
export class NewFiliereComponent extends Cancel implements OnInit {

  submitted = false;
  filiere = new Filiere();

  constructor(private srv: FiliereService, private messageSrv: MessageService, confirmSrv: ConfirmationService) {
    super(confirmSrv);
  }

  ngOnInit(): void {
  }

  create(){
    this.submitted = true;
    this.srv.addFiliere(this.filiere).subscribe({
      next: (res) => {
        this.filiere = new Filiere();
        this.messageSrv.add({
          summary: 'La filière a été créée',
          severity: 'success'
        });
        this.submitted = false;
        this.status.emit(false);
      },
      error: (err) => console.error(err)       
    });
  }

}
