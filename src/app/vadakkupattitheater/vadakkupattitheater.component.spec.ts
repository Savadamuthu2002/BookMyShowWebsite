import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadakkupattitheaterComponent } from './vadakkupattitheater.component';

describe('VadakkupattitheaterComponent', () => {
  let component: VadakkupattitheaterComponent;
  let fixture: ComponentFixture<VadakkupattitheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VadakkupattitheaterComponent]
    });
    fixture = TestBed.createComponent(VadakkupattitheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
