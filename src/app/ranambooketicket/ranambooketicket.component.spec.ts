import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanambooketicketComponent } from './ranambooketicket.component';

describe('RanambooketicketComponent', () => {
  let component: RanambooketicketComponent;
  let fixture: ComponentFixture<RanambooketicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RanambooketicketComponent]
    });
    fixture = TestBed.createComponent(RanambooketicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
