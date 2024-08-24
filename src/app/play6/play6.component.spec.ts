import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Play6Component } from './play6.component';

describe('Play6Component', () => {
  let component: Play6Component;
  let fixture: ComponentFixture<Play6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Play6Component]
    });
    fixture = TestBed.createComponent(Play6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
