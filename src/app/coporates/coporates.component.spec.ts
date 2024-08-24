import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoporatesComponent } from './coporates.component';

describe('CoporatesComponent', () => {
  let component: CoporatesComponent;
  let fixture: ComponentFixture<CoporatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoporatesComponent]
    });
    fixture = TestBed.createComponent(CoporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
