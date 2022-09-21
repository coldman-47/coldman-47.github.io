import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRedevancesComponent } from './list-redevances.component';

describe('ListRedevancesComponent', () => {
  let component: ListRedevancesComponent;
  let fixture: ComponentFixture<ListRedevancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRedevancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRedevancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
