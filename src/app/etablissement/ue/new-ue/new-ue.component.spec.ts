import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUeComponent } from './new-ue.component';

describe('NewUeComponent', () => {
  let component: NewUeComponent;
  let fixture: ComponentFixture<NewUeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
