import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream2Component } from './stream2.component';

describe('Stream2Component', () => {
  let component: Stream2Component;
  let fixture: ComponentFixture<Stream2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream2Component]
    });
    fixture = TestBed.createComponent(Stream2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
