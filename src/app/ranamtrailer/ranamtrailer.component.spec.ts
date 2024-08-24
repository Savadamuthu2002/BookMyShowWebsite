import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanamtrailerComponent } from './ranamtrailer.component';

describe('RanamtrailerComponent', () => {
  let component: RanamtrailerComponent;
  let fixture: ComponentFixture<RanamtrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RanamtrailerComponent]
    });
    fixture = TestBed.createComponent(RanamtrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
