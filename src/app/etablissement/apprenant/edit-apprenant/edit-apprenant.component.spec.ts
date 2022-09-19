import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApprenantComponent } from './edit-apprenant.component';

describe('EditApprenantComponent', () => {
  let component: EditApprenantComponent;
  let fixture: ComponentFixture<EditApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApprenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
