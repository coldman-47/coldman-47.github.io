import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Etablissement } from 'src/app/core/models/etablissement/etablissement';
import { EtablissementService } from 'src/app/core/services/etablissement/etablissement.service';

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.sass']
})
export class EtablissementsComponent implements OnInit {

  etablissements!: Etablissement[];
  items!: MenuItem[];
  boom: any;
  pagination: any;
  loading = false;
  page?: number;
  active?: number;
  selected?: Etablissement;
  edit = false;
  display = true;

  constructor(private etablissementSrv: EtablissementService) {}

  ngOnInit(): void {
    this.items = [
      { label: 'En service', icon: 'pi pi-fw pi-home' },
      { label: 'Absents', icon: 'pi pi-fw pi-calendar' },
    ];
    this.getEtablissements();
  }

  getEtablissements(_page?: number, param?: string, _loading = true) {
    this.page = _page;
    this.loading = _loading;
    this.etablissementSrv.getEtablissements(_page, param).subscribe({
      next: (res) => {
        this.etablissements = res.data;
        console.table(this.etablissements);
        const { totalElements, page, limit } = res;
        this.pagination = { totalElements, page, limit };
        this.loading = false;
      },
      error: (err) => console.error(err),
    });
  }

  cancel(e: any) {
    this.edit = e;
  }

}
