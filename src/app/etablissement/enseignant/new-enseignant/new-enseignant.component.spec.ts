import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnseignantComponent } from './new-enseignant.component';

describe('NewEnseignantComponent', () => {
  let component: NewEnseignantComponent;
  let fixture: ComponentFixture<NewEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
