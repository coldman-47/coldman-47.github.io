import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRedevanceComponent } from './new-redevance.component';

describe('NewRedevanceComponent', () => {
  let component: NewRedevanceComponent;
  let fixture: ComponentFixture<NewRedevanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRedevanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRedevanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
