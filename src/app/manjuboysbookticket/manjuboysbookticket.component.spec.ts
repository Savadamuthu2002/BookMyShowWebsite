import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManjuboysbookticketComponent } from './manjuboysbookticket.component';

describe('ManjuboysbookticketComponent', () => {
  let component: ManjuboysbookticketComponent;
  let fixture: ComponentFixture<ManjuboysbookticketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManjuboysbookticketComponent]
    });
    fixture = TestBed.createComponent(ManjuboysbookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
