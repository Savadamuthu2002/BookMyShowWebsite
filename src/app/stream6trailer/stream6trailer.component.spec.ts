import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream6trailerComponent } from './stream6trailer.component';

describe('Stream6trailerComponent', () => {
  let component: Stream6trailerComponent;
  let fixture: ComponentFixture<Stream6trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream6trailerComponent]
    });
    fixture = TestBed.createComponent(Stream6trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
