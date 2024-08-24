import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovertrailerComponent } from './lovertrailer.component';

describe('LovertrailerComponent', () => {
  let component: LovertrailerComponent;
  let fixture: ComponentFixture<LovertrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovertrailerComponent]
    });
    fixture = TestBed.createComponent(LovertrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
