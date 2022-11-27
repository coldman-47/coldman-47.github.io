import { Component, Input, OnInit } from '@angular/core';
import { CoursService } from 'src/app/core/services/cours/cours.service';

@Component({
  selector: 'app-details-enseignant',
  templateUrl: './details-enseignant.component.html',
  styleUrls: ['./details-enseignant.component.sass']
})
export class DetailsEnseignantComponent implements OnInit {

  @Input() idEnseignant: any;
  cours: any = []

  constructor(private srv: CoursService) { }

  ngOnInit(): void {
    this.srv.coursEnseignant(this.idEnseignant).subscribe({
      next: (res) => this.cours = res
    });
  }

}
