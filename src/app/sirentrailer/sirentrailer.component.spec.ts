import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirentrailerComponent } from './sirentrailer.component';

describe('SirentrailerComponent', () => {
  let component: SirentrailerComponent;
  let fixture: ComponentFixture<SirentrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SirentrailerComponent]
    });
    fixture = TestBed.createComponent(SirentrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
