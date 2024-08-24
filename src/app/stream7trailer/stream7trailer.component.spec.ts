import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream7trailerComponent } from './stream7trailer.component';

describe('Stream7trailerComponent', () => {
  let component: Stream7trailerComponent;
  let fixture: ComponentFixture<Stream7trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream7trailerComponent]
    });
    fixture = TestBed.createComponent(Stream7trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
