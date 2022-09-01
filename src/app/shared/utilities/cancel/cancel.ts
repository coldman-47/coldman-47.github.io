import { Component, EventEmitter, Output } from "@angular/core";
import { ConfirmationService } from "primeng/api";

@Component({
    template: ''
  })
export class Cancel {
    @Output() status = new EventEmitter<boolean>();

    constructor(protected confirmationService: ConfirmationService){}

    cancelEdition(e: any) {
        this.confirmationService.confirm({
          target: e.target,
          message: 'Êtes vous sûr de vouloir abandonner les données saisies?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => this.status.emit(false),
          reject: () => {},
        });
      }
}
