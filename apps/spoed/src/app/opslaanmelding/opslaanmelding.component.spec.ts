import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpslaanmeldingComponent } from './opslaanmelding.component';

describe('OpslaanmeldingComponent', () => {
  let component: OpslaanmeldingComponent;
  let fixture: ComponentFixture<OpslaanmeldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpslaanmeldingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpslaanmeldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
