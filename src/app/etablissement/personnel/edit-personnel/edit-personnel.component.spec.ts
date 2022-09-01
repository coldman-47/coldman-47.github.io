import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';

import { EditPersonnelComponent } from './edit-personnel.component';

describe('EditPersonnelComponent', () => {
  let component: EditPersonnelComponent;
  let fixture: ComponentFixture<EditPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonnelComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ FormBuilder, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
