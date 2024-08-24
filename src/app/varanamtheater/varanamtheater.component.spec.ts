import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaranamtheaterComponent } from './varanamtheater.component';

describe('VaranamtheaterComponent', () => {
  let component: VaranamtheaterComponent;
  let fixture: ComponentFixture<VaranamtheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaranamtheaterComponent]
    });
    fixture = TestBed.createComponent(VaranamtheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
