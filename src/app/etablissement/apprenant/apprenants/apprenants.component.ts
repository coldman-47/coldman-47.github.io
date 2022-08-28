import { Component, Input, OnInit } from '@angular/core';
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.sass'],
})
export class ApprenantsComponent implements OnInit {
  @Input() classe!: any;
  apprenants: any[] = [];

  constructor(private srv: ApprenantService) {}

  ngOnInit(): void {
    this.apprenants = this.classe.apprenants;
    this.apprenants.forEach(async (item: string, idx) =>
      this.srv.getApprenant(item).subscribe({
        next: (_apprenant) => (this.apprenants[idx] = _apprenant),
      })
    );
  }
}
