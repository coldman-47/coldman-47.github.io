import { Component, Input, OnInit } from '@angular/core';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';
import { Apprenant } from '../../../core/models/apprenant/apprenant';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.sass'],
})
export class ApprenantsComponent implements OnInit {
  @Input() classe!: any;
  apprenants: any[] = [];
  selected?: Apprenant;
  edition = false;

  constructor(private srv: ApprenantService) {
    srv.serverSentEvent.subscribe({
      next: (apprenant: any) => {
        if(apprenant){
          if (apprenant.method === 'put') {
            const idx = this.apprenants.findIndex(
              (_apprenant) => _apprenant._id === apprenant._data._id
            );
            if (idx !== -1) this.apprenants[idx] = apprenant._data;
          } else {
            if (this.apprenants.length < 10) this.apprenants.push(apprenant._data);
            // this.pagination.totalElements++;
          }
        }
      },
    });
  }

  ngOnInit(): void {
    this.srv.getApprenants(this.classe._id).subscribe({
      next: (apprenants: any) => {
        this.apprenants = apprenants;
        this.srv.apprenants.next(apprenants);
      }
    });
  }

  delete(id?: string){
    this.srv.delete(id!).subscribe({
      next: (res) => console.log(res)
    });
  }
}
