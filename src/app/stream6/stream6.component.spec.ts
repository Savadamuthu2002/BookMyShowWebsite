import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream6Component } from './stream6.component';

describe('Stream6Component', () => {
  let component: Stream6Component;
  let fixture: ComponentFixture<Stream6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream6Component]
    });
    fixture = TestBed.createComponent(Stream6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
