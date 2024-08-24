import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportMovieComponent } from './sport-movie.component';

describe('SportMovieComponent', () => {
  let component: SportMovieComponent;
  let fixture: ComponentFixture<SportMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportMovieComponent]
    });
    fixture = TestBed.createComponent(SportMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
