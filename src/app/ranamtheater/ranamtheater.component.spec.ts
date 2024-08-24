import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanamtheaterComponent } from './ranamtheater.component';

describe('RanamtheaterComponent', () => {
  let component: RanamtheaterComponent;
  let fixture: ComponentFixture<RanamtheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RanamtheaterComponent]
    });
    fixture = TestBed.createComponent(RanamtheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
