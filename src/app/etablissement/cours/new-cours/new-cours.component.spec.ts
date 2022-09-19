import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursComponent } from './new-cours.component';

describe('NewCoursComponent', () => {
  let component: NewCoursComponent;
  let fixture: ComponentFixture<NewCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
