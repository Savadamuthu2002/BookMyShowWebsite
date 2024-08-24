import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirentheaterComponent } from './sirentheater.component';

describe('SirentheaterComponent', () => {
  let component: SirentheaterComponent;
  let fixture: ComponentFixture<SirentheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SirentheaterComponent]
    });
    fixture = TestBed.createComponent(SirentheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
