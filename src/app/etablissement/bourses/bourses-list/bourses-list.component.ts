import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { BourseModel } from 'src/app/core/models/bourse/bourse.model';
import { BourseService } from 'src/app/core/services/bourse/bourse.service';

@Component({
  selector: 'app-bourses-list',
  templateUrl: './bourses-list.component.html',
  styleUrls: ['./bourses-list.component.sass']
})
export class BoursesListComponent implements OnInit {
  bourses$: Observable<BourseModel[]>;

  constructor(
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService,
    private _bourseService: BourseService
  ) { }

  ngOnInit(): void {
    this.bourses$ = this._bourseService.bourses$;
    this._bourseService.getBourses();
  }

  onDeleteBourse(id: number): void {
    this._confirmationService.confirm({
      message: 'Voulez-vous supprimer cette bourse?',
      header: 'Suppression',
      acceptLabel: 'Supprimer',
      acceptButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Annuler',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._bourseService.deleteBourse(id).subscribe({
          next: (data) => {
            this._messageService.add({
              severity: 'info',
              summary: 'Confirmation',
              detail: 'Bourse supprimée',
            });
            this._bourseService.getBourses();
          },
          error: (err) => {
            this._messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: err.error.message,
            });
          }
        });
      },
    });
  }

}
