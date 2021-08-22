import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnderereceptComponent } from './andererecept.component';

describe('AnderereceptComponent', () => {
  let component: AnderereceptComponent;
  let fixture: ComponentFixture<AnderereceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnderereceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnderereceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
