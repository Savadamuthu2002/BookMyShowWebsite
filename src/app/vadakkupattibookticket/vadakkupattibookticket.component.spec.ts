import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadakkupattibookticketComponent } from './vadakkupattibookticket.component';

describe('VadakkupattibookticketComponent', () => {
  let component: VadakkupattibookticketComponent;
  let fixture: ComponentFixture<VadakkupattibookticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VadakkupattibookticketComponent]
    });
    fixture = TestBed.createComponent(VadakkupattibookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
