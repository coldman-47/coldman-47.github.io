import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

const PRIME_MODULES = [
  // PrimeNG Modules
  ButtonModule,
  CardModule,
  ConfirmDialogModule,
  DropdownModule,
  InputNumberModule,
  InputTextModule,
  MenuModule,
  MultiSelectModule,
  PanelModule,
  RippleModule,
  ProgressSpinnerModule,
  TableModule,
  ToastModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIME_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...PRIME_MODULES
  ]
})
export class SharedModule { }
