import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream1trailerComponent } from './stream1trailer.component';

describe('Stream1trailerComponent', () => {
  let component: Stream1trailerComponent;
  let fixture: ComponentFixture<Stream1trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream1trailerComponent]
    });
    fixture = TestBed.createComponent(Stream1trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
