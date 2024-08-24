import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream3trailerComponent } from './stream3trailer.component';

describe('Stream3trailerComponent', () => {
  let component: Stream3trailerComponent;
  let fixture: ComponentFixture<Stream3trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream3trailerComponent]
    });
    fixture = TestBed.createComponent(Stream3trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
