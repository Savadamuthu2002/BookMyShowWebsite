import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoverbooketicketComponent } from './loverbooketicket.component';

describe('LoverbooketicketComponent', () => {
  let component: LoverbooketicketComponent;
  let fixture: ComponentFixture<LoverbooketicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoverbooketicketComponent]
    });
    fixture = TestBed.createComponent(LoverbooketicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
