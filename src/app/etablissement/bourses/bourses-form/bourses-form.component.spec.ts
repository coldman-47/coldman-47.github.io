import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoursesFormComponent } from './bourses-form.component';

describe('BoursesFormComponent', () => {
  let component: BoursesFormComponent;
  let fixture: ComponentFixture<BoursesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoursesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoursesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
