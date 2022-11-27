import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/core/models/enseignant/enseignant';
import { EnseignantService } from 'src/app/core/services/enseignant/enseignant.service';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.sass'],
})
export class EnseignantsComponent implements OnInit {
  enseignant: Enseignant[] = [];
  roles: any[] = [];
  edit = false;
  selected?: Enseignant;
  active?: number;
  skltArray = new Array(8);
  pagination: any;
  loading = false;
  page?: number;
  // @Input() departements!: Departement[];
  visible = false;

  constructor(private srv: EnseignantService) {
    srv.serverSentEvent.subscribe({
      next: (agent: any) => {
        if (agent) {
          if (agent.method === 'put') {
            const idx = this.enseignant.findIndex(
              (_agent) => _agent._id === agent._data._id
            );
            if (idx !== -1) this.enseignant[idx] = agent._data;
          } else {
            if (this.enseignant.length < 10) this.enseignant.push(agent._data);
            this.pagination.totalElements++;
          }
        }
      },
    });
  }

  ngOnInit(): void {
    this.getEnseignant(undefined, undefined, false);
  }

  getEnseignant(_page?: number, param?: string, _loading = true) {
    this.page = _page;
    this.loading = _loading;
    this.srv.getEnseignants(_page, param).subscribe({
      next: (res) => {
        this.enseignant = res.data;
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
    this.getEnseignant(this.page, param);
  }

  cancel(e: any) {
    this.edit = e;
  }

  delete(id: string) {
    this.srv.deleteEnseignant(id).subscribe({
      next: (_res) => console.log(_res),
      error: (_err) => console.log(_err),
    });
  }
}
