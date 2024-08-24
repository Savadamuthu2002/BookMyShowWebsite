import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream7Component } from './stream7.component';

describe('Stream7Component', () => {
  let component: Stream7Component;
  let fixture: ComponentFixture<Stream7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream7Component]
    });
    fixture = TestBed.createComponent(Stream7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
