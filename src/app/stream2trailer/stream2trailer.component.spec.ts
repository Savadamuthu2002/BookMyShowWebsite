import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream2trailerComponent } from './stream2trailer.component';

describe('Stream2trailerComponent', () => {
  let component: Stream2trailerComponent;
  let fixture: ComponentFixture<Stream2trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream2trailerComponent]
    });
    fixture = TestBed.createComponent(Stream2trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
