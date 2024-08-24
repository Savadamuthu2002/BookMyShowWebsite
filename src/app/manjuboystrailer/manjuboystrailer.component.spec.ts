import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManjuboystrailerComponent } from './manjuboystrailer.component';

describe('ManjuboystrailerComponent', () => {
  let component: ManjuboystrailerComponent;
  let fixture: ComponentFixture<ManjuboystrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManjuboystrailerComponent]
    });
    fixture = TestBed.createComponent(ManjuboystrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
