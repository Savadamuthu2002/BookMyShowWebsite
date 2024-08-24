import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport5Component } from './sport5.component';

describe('Sport5Component', () => {
  let component: Sport5Component;
  let fixture: ComponentFixture<Sport5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sport5Component]
    });
    fixture = TestBed.createComponent(Sport5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
