import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Play3Component } from './play3.component';

describe('Play3Component', () => {
  let component: Play3Component;
  let fixture: ComponentFixture<Play3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Play3Component]
    });
    fixture = TestBed.createComponent(Play3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
