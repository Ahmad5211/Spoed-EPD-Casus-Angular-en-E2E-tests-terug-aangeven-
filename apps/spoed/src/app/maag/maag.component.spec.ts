import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaagComponent } from './maag.component';

describe('MaagComponent', () => {
  let component: MaagComponent;
  let fixture: ComponentFixture<MaagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
