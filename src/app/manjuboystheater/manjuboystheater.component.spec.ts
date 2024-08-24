import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManjuboystheaterComponent } from './manjuboystheater.component';

describe('ManjuboystheaterComponent', () => {
  let component: ManjuboystheaterComponent;
  let fixture: ComponentFixture<ManjuboystheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManjuboystheaterComponent]
    });
    fixture = TestBed.createComponent(ManjuboystheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
