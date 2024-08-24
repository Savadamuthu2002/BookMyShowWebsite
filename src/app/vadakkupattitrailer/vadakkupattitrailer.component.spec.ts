import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadakkupattitrailerComponent } from './vadakkupattitrailer.component';

describe('VadakkupattitrailerComponent', () => {
  let component: VadakkupattitrailerComponent;
  let fixture: ComponentFixture<VadakkupattitrailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VadakkupattitrailerComponent]
    });
    fixture = TestBed.createComponent(VadakkupattitrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
