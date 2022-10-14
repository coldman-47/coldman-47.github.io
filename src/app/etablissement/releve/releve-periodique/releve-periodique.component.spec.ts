import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevePeriodiqueComponent } from './releve-periodique.component';

describe('RelevePeriodiqueComponent', () => {
  let component: RelevePeriodiqueComponent;
  let fixture: ComponentFixture<RelevePeriodiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelevePeriodiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevePeriodiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
