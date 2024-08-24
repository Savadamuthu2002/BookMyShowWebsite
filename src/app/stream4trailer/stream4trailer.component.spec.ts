import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stream4trailerComponent } from './stream4trailer.component';

describe('Stream4trailerComponent', () => {
  let component: Stream4trailerComponent;
  let fixture: ComponentFixture<Stream4trailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stream4trailerComponent]
    });
    fixture = TestBed.createComponent(Stream4trailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
