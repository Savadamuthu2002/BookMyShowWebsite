import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinetysixtheaterComponent } from './ninetysixtheater.component';

describe('NinetysixtheaterComponent', () => {
  let component: NinetysixtheaterComponent;
  let fixture: ComponentFixture<NinetysixtheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NinetysixtheaterComponent]
    });
    fixture = TestBed.createComponent(NinetysixtheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
