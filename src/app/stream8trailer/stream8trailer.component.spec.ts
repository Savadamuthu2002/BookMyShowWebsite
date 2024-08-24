import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream8trailerComponent } from './stream8trailer.component';

describe('Stream8trailerComponent', () => {
  let component: Stream8trailerComponent;
  let fixture: ComponentFixture<Stream8trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream8trailerComponent]
    });
    fixture = TestBed.createComponent(Stream8trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
