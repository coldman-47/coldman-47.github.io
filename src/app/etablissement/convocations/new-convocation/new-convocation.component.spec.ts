import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConvocationComponent } from './new-convocation.component';

describe('NewConvocationComponent', () => {
  let component: NewConvocationComponent;
  let fixture: ComponentFixture<NewConvocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConvocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
