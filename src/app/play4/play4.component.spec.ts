import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Play4Component } from './play4.component';

describe('Play4Component', () => {
  let component: Play4Component;
  let fixture: ComponentFixture<Play4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Play4Component]
    });
    fixture = TestBed.createComponent(Play4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
