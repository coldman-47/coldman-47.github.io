import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/app/core/models/personnel/personnel';
import { PersonnelService } from 'src/app/core/services/personnel/personnel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.sass']
})
export class PersonnelComponent implements OnInit {

  personnel: Personnel[] = [];
  roles: any[] = [];
  edit = false;
  selected?: Personnel;
  active?: number;
  skltArray = new Array(8);
  pagination: any;
  loading = false;
  page?: number;
  // @Input() departements!: Departement[];
  details = false;

  constructor(private personnelSrv: PersonnelService) {
    personnelSrv.serverSentEvent.subscribe({
      next: (agent: any) => {
        if(agent){
          if (agent.method === 'put') {
            const idx = this.personnel.findIndex(
              (_agent) => _agent._id === agent._data._id
            );
            if (idx !== -1) this.personnel[idx] = agent._data;
          } else {
            if (this.personnel.length < 10) this.personnel.push(agent._data);
            this.pagination.totalElements++;
          }
        }
      },
    });
  }

  ngOnInit(): void {
    this.getPersonnel(undefined, undefined, false);
  }

  getPersonnel(_page?: number, param?: string, _loading = true) {
    this.page = _page;
    this.loading = _loading;
    this.personnelSrv.getPersonnels(_page, param).subscribe({
      next: (res) => {
        this.personnel = res.data;
        const { totalElements, page, itemPerPage } = res;
        this.pagination = { totalElements, page, itemPerPage };
        this.loading = false;
      },
      error: (err) => console.error(err),
    });
  }

  ngDoCheck() {
    if (!this.edit) {
      this.active = undefined;
    }
  }

  search(param: string) {
    this.getPersonnel(this.page, param);
  }

  cancel(e: any) {
    this.edit = e;
  }

  delete(id: string){
    this.personnelSrv.deletePersonnel(id).subscribe({
      next: _res => console.log(_res),
      error: _err => console.log(_err)
    })
  }

}
