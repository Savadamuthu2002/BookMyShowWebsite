import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinetySixtyBooketicketComponent } from './ninety-sixty-booketicket.component';

describe('NinetySixtyBooketicketComponent', () => {
  let component: NinetySixtyBooketicketComponent;
  let fixture: ComponentFixture<NinetySixtyBooketicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NinetySixtyBooketicketComponent]
    });
    fixture = TestBed.createComponent(NinetySixtyBooketicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
