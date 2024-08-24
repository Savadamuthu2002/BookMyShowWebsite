import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirenbooketicketComponent } from './sirenbooketicket.component';

describe('SirenbooketicketComponent', () => {
  let component: SirenbooketicketComponent;
  let fixture: ComponentFixture<SirenbooketicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SirenbooketicketComponent]
    });
    fixture = TestBed.createComponent(SirenbooketicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
