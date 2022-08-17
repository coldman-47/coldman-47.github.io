import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEtablissementComponent } from './new-etablissement.component';

describe('NewEtablissementComponent', () => {
  let component: NewEtablissementComponent;
  let fixture: ComponentFixture<NewEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEtablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
