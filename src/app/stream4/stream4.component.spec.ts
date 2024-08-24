import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream4Component } from './stream4.component';

describe('Stream4Component', () => {
  let component: Stream4Component;
  let fixture: ComponentFixture<Stream4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream4Component]
    });
    fixture = TestBed.createComponent(Stream4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
