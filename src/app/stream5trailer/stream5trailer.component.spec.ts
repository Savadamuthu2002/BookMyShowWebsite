import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream5trailerComponent } from './stream5trailer.component';

describe('Stream5trailerComponent', () => {
  let component: Stream5trailerComponent;
  let fixture: ComponentFixture<Stream5trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream5trailerComponent]
    });
    fixture = TestBed.createComponent(Stream5trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
