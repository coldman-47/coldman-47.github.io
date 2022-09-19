import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApprenantComponent } from './new-apprenant.component';

describe('NewApprenantComponent', () => {
  let component: NewApprenantComponent;
  let fixture: ComponentFixture<NewApprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewApprenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
