import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailServicesComponent } from './app-detail-services.component';

describe('AppDetailServicesComponent', () => {
  let component: AppDetailServicesComponent;
  let fixture: ComponentFixture<AppDetailServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDetailServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
