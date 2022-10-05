import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BourseModel } from 'src/app/core/models/bourse/bourse.model';
import { BourseService } from 'src/app/core/services/bourse/bourse.service';

@Component({
  selector: 'app-bourses-form',
  templateUrl: './bourses-form.component.html',
  styleUrls: ['./bourses-form.component.sass']
})
export class BoursesFormComponent implements OnInit {
  bourseForm: FormGroup = new FormGroup({
    annee: new FormControl(),
    pourcentage: new FormControl(),
  });

  bourse: BourseModel;
  isEdit: boolean = false;
  title: string = 'Nouvelle bourse';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _bourseService: BourseService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      if (params['id']) {
        this._bourseService.getBourse(params['id']).subscribe((data: BourseModel) => {
          this.bourse = data;
          this.title = 'Modifier bourse';
          this.isEdit = true;
          this.bourseForm.patchValue(data);
        });
      }
    });
  }

  onSubmit() {
    if (this.bourseForm.invalid) { return; }

    this.bourse = {
      ...this.bourse,
      ...this.bourseForm.value
    }

    if (this.isEdit) {
      this._bourseService.updateBourse(this.bourse).subscribe({
        next: () => {
          this._router.navigate(['/etablissement/bourses']);
        }
      });
    } else {
      this._bourseService.addBourse(this.bourse).subscribe({
        next: () => {
          this._router.navigate(['/etablissement/bourses']);
        }
      });
    }

  }

}
