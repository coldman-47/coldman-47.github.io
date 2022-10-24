import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailPayementsComponent } from './app-detail-payements.component';

describe('AppDetailPayementsComponent', () => {
  let component: AppDetailPayementsComponent;
  let fixture: ComponentFixture<AppDetailPayementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailPayementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDetailPayementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
