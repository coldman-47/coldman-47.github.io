import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  template: '',
})
export class StepEvent {
    @Output() status = new EventEmitter<boolean>();
}
