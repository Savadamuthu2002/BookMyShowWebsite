import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinetySixtyTrailerComponent } from './ninety-sixty-trailer.component';

describe('NinetySixtyTrailerComponent', () => {
  let component: NinetySixtyTrailerComponent;
  let fixture: ComponentFixture<NinetySixtyTrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NinetySixtyTrailerComponent]
    });
    fixture = TestBed.createComponent(NinetySixtyTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
