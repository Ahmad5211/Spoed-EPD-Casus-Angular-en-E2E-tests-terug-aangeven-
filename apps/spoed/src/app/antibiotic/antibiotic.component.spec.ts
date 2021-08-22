import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntibioticComponent } from './antibiotic.component';

describe('AntibioticComponent', () => {
  let component: AntibioticComponent;
  let fixture: ComponentFixture<AntibioticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntibioticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntibioticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
