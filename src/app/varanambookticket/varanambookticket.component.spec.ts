import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaranambookticketComponent } from './varanambookticket.component';

describe('VaranambookticketComponent', () => {
  let component: VaranambookticketComponent;
  let fixture: ComponentFixture<VaranambookticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaranambookticketComponent]
    });
    fixture = TestBed.createComponent(VaranambookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
