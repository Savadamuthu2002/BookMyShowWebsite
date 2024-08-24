import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovertheaterComponent } from './lovertheater.component';

describe('LovertheaterComponent', () => {
  let component: LovertheaterComponent;
  let fixture: ComponentFixture<LovertheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovertheaterComponent]
    });
    fixture = TestBed.createComponent(LovertheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
