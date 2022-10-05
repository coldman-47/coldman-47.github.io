import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoursesListComponent } from './bourses-list.component';

describe('BoursesListComponent', () => {
  let component: BoursesListComponent;
  let fixture: ComponentFixture<BoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoursesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
