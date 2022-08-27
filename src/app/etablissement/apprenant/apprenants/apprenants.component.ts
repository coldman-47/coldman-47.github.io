import { Component, Input, OnInit } from '@angular/core';
import { Apprenant } from 'src/app/core/models/apprenant/apprenant';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.sass']
})
export class ApprenantsComponent implements OnInit {

  @Input() apprenants!: Apprenant[]

  constructor() { }

  ngOnInit(): void {
  }

}
